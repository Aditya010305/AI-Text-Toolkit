from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

from common.config import SENTIMENT_MODEL

tokenizer = AutoTokenizer.from_pretrained(SENTIMENT_MODEL)
model = AutoModelForSequenceClassification.from_pretrained(SENTIMENT_MODEL)


def predict_sentiment(text: str) -> dict:
    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True
    )

    with torch.inference_mode():
        outputs = model(**inputs)

    logits = outputs.logits[0]
    probabilities = torch.softmax(logits, dim=-1)

    predicted_class = torch.argmax(probabilities).item()

    if predicted_class == 0:
        sentiment = "Negative"
        confidence = probabilities[0].item()

    elif predicted_class == 1:
        sentiment = "Neutral"
        confidence = probabilities[1].item()

    else:
        sentiment = "Positive"
        confidence = probabilities[2].item()

    return {
        "sentiment": sentiment,
        "fine_grained_sentiment": model.config.id2label[predicted_class].replace("_", " ").title(),
        "confidence": round(confidence * 100, 2)
    }