from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from common.schemas import TextRequest
from models.sentiment import predict_sentiment

app = FastAPI(
    title="Sentiment API"
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
        "service": "Sentiment API"
    }


@app.post("/predict")
def predict(request: TextRequest):
    return predict_sentiment(request.text)