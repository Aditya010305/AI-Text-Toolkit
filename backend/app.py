from fastapi import FastAPI
from pydantic import BaseModel, Field

from backend.models.sentiment import predict_sentiment
from backend.models.translation import translate
from backend.models.summarization import summarize
from backend.models.question_answering import answer
from backend.models.zero_shot import classify


from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="AI Text Toolkit API",
    description="REST API for NLP tasks using Hugging Face Transformers",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Later replace with your Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class ZeroShotRequest(BaseModel):
    text : str = Field(
        min_length=1,
        description="Input text"
    )
    labels : list[str] = Field(
        min_length=1
    )

class TextRequest(BaseModel):
    text : str  = Field(
        min_length=1,
        description="Input text"
    )
    
class QuestionAnswerRequest(BaseModel):
    question : str = Field(
        min_length=1,
        description="Question about the context"
    )
    context : str = Field(
        min_length=1,
        description="Context passage"
    )


@app.post('/sentiment')
def sentiment(request : TextRequest):
    return predict_sentiment(request.text)

@app.post('/translation')
def translation(request : TextRequest):
    return translate(request.text)

@app.post('/summarization')
def summarization(request : TextRequest):
    return summarize(request.text)

@app.post('/question-answering')
def question_answering(request : QuestionAnswerRequest):
    return answer(request.question, request.context)

@app.post('/zero-shot-classification')
def zero_shot_classification(request : ZeroShotRequest):
    return classify(request.text, request.labels)
    