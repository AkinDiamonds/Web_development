from fastapi import FastAPI
from pydantic import BaseModel, Field
from dotenv import load_dotenv
import uvicorn
import os

load_dotenv()
app = FastAPI(title="Simple FASTAPI App", version="1.0.0")


data = {
    1: {
        "name": "Simeon",
        "age": 30,
        "track": "AI Developer"
    },
    2:
    {
        "name": "Boniface",
        "age": 30,
        "track": "AI Developer"
    },
    3:
    {
        "name": "Bon Adventure",
        "age": 35,
        "track": "AI Developer"
    }
}

serial_no = 4


class Item(BaseModel):
    name: str= Field(..., examples="Omoolomo")
    age: int = Field(..., examples="30")
    track: str = Field(..., examples="Developer")

@app.get("/")
def root():
    return{"Message": "Welcome to my FastAPI Application"}

# @app.get("/get-data/{id}")
# def get_data(id):
#     for id, details in data.items():
#         if id == id:
#             return details
#         break

@app.post("/add-data")
def add_data(new_data: Item):
    data.append(new_data.dict())
    return {"Message: Data successfully added!", data}

# @app.put("/replace-data/{id}")
# def replace_data(id, new_data):
#     data[id] = new_data.dict()
#     return data

if __name__ == "__main__":
    print(os.getenv("host"))
    print(os.getenv("port"))
    uvicorn.run(app, host=os.getenv("host"), port = int(os.getenv("port")))