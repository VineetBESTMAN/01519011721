import requests

def fetch_products(companyname: str, categoryname: str, top: int, minPrice: float, maxPrice: float, page: int = 1):
    # Implement logic to call the external API based on companyname, categoryname, and filters
    # Example API call to test server
    url = f"http://20.244.56.144/test/companies/{companyname}/categories/{categoryname}/products"
    params = {
        "top": top,
        "minPrice": minPrice,
        "maxPrice": maxPrice,
        "page": page
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to fetch products"}

