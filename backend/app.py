from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from common.schemas import (
    TextRequest,
    QuestionAnswerRequest,
    ZeroShotRequest
)

from models.sentiment import predict_sentiment
from models.translation import translate
from models.summarization import summarize
from models.question_answering import answer
from models.zero_shot import classify



app = FastAPI(
    title="AI Text Toolkit API",
    description="REST API for NLP tasks using Hugging Face Transformers",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/sentiment')
def sentiment(request: TextRequest):
    return predict_sentiment(request.text)

@app.post('/translation')
def translation(request: TextRequest):
    return translate(request.text)

@app.post('/summarization')
def summarization(request: TextRequest):
    return summarize(request.text)

@app.post('/question-answering')
def question_answering(request: QuestionAnswerRequest):
    return answer(request.question, request.context)

@app.post('/zero-shot-classification')
def zero_shot_classification(request: ZeroShotRequest):
    return classify(request.text, request.labels)

@app.get("/")
def root():
    return {
        "message": "AI Text Toolkit API is running.",
        "version": "1.0.0",
        "documentation": "/docs"
    }