from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from common.schemas import ZeroShotRequest
from models.zero_shot import classify

app = FastAPI(
    title="Zero Shot API"
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
        "service": "Zero Shot API"
    }


@app.post("/predict")
def predict(request: ZeroShotRequest):
    return classify(
        request.text,
        request.labels
    )