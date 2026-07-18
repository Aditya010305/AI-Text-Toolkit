from pydantic import BaseModel, Field

class TextRequest(BaseModel):
    text: str = Field(
        min_length=1,
        description="Input text"
    )


class QuestionAnswerRequest(BaseModel):
    question: str = Field(
        min_length=1,
        description="Question about the context"
    )

    context: str = Field(
        min_length=1,
        description="Context passage"
    )


class ZeroShotRequest(BaseModel):
    text: str = Field(
        min_length=1,
        description="Input text"
    )

    labels: list[str] = Field(
        min_length=1
    )