from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def home():

    return {
        "message":
        "FastAPI Backend Connected Successfully"
    }


@app.get("/services")
def services():

    return {
        "services":[
            "IT Consultancy",
            "Business Consultancy",
            "Software Development"
        ]
    }