#main.py

from fastapi import FastAPI

app = FastAPI()

# Include API routers
from app.api import products

app.include_router(products.router)
