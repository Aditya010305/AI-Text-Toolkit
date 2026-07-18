from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from common.schemas import QuestionAnswerRequest
from models.question_answering import answer

app = FastAPI(title="Question Answer API")

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
        "service": "Question Answer API"
    }


@app.post("/predict")
def predict(request: QuestionAnswerRequest):
    return answer(
        request.question,
        request.context
    )