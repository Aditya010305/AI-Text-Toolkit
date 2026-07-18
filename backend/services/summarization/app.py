from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from common.schemas import TextRequest
from models.summarization import summarize

app = FastAPI(title="Summarization API")

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
        "service": "Summarization API"
    }


@app.post("/predict")
def predict(request: TextRequest):
    return summarize(request.text)