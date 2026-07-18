from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

from config import SENTIMENT_MODEL

tokenizer = AutoTokenizer.from_pretrained(SENTIMENT_MODEL)
model = AutoModelForSequenceClassification.from_pretrained(SENTIMENT_MODEL)


def predict_sentiment(text):
    inputs = tokenizer(text, return_tensors = "pt", truncation=True)
    
    with torch.inference_mode():
        outputs = model(**inputs)
    
    logits = outputs.logits[0]
    
    probs = torch.softmax(logits, dim = -1)
    predicted_class = torch.argmax(probs).item()
    
    if predicted_class < 2:
        sentiment = "Negative"
        score = probs[:2].sum().item()
    elif predicted_class == 2:
        sentiment = "Neutral"
        score = probs[2].item()
    else:
        sentiment = "Positive"
        score = probs[3:5].sum().item()
        
    return{
        "sentiment" : sentiment,
        "fine_grained_sentiment" : model.config.id2label[predicted_class],
        "confidence" : round(score * 100, 2)
    }