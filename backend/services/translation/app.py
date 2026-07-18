from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from common.schemas import TextRequest
from models.translation import translate

app = FastAPI(
    title="Translation API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "service": "Translation API"
    }


@app.post("/predict")
def predict(request: TextRequest):
    return translate(request.text)