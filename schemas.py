from pydantic import BaseModel
from typing import List, Optional

class Product(BaseModel):
    id: str
    name: str
    price: float
    company: str
    category: str
    rating: Optional[float]
    discount: Optional[float]

