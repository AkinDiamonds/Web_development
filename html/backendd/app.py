from fastapi import FastAPI
from pydantic import BaseModel, Field
from dotenv import load_dotenv
import uvicorn
import os

load_dotenv()
app = FastAPI(title="Simple FASTAPI App", version="1.0.0")


data = [
    {
        "name": "Simeon",
        "age": 30,
        "track": "AI Developer"
    },
    {
        "name": "Boniface",
        "age": 30,
        "track": "AI Developer"
    },
    {
        "name": "Bon Adventure",
        "age": 35,
        "track": "AI Developer"
    }
]

serial_no = 4


class Item(BaseModel):
    name: str= Field(..., examples="Omoolomo")
    age: int = Field(..., examples="30")
    track: str = Field(..., examples="Developer")

@app.get("/")
def root():
    return{"Message": "Welcome to my FastAPI Application"}

# @app.get("/get/{id}")
# def getItem(id):
#     if 

if __name__ == "__main__":
    print(os.getenv("host"))
    print(os.getenv("port"))
    uvicorn.run(app, host=os.getenv("host"), port = int(os.getenv("port")))