from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Rini Engineering Works API")
api_router = APIRouter(prefix="/api")


# ---- Models ----
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    product_interest: str
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class QuoteRequestCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., max_length=200)
    phone: str = Field(..., min_length=5, max_length=30)
    product_interest: str = Field(..., max_length=100)
    message: Optional[str] = Field("", max_length=2000)


class ContactInfo(BaseModel):
    company: str
    address: str
    phone: str
    whatsapp: str
    email: str


# ---- Routes ----
@api_router.get("/")
async def root():
    return {"message": "Rini Engineering Works API", "status": "ok"}


@api_router.get("/contact-info", response_model=ContactInfo)
async def get_contact_info():
    return ContactInfo(
        company="Rini Engineering Works",
        address="Industrial Development Area, Muppathadom, 683110",
        phone="+91 9605883001",
        whatsapp="919605883001",
        email="riniengineeringworks@gmail.com",
    )


@api_router.post("/quotes", response_model=QuoteRequest, status_code=201)
async def create_quote(payload: QuoteRequestCreate):
    quote = QuoteRequest(**payload.model_dump())
    doc = quote.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.quote_requests.insert_one(doc)
    except Exception:
        logger.exception("Failed to save quote")
        raise HTTPException(status_code=500, detail="Failed to save quote request")
    return quote


@api_router.get("/quotes", response_model=List[QuoteRequest])
async def list_quotes():
    docs = await db.quote_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
