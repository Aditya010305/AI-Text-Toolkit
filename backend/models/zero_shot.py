from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

from backend.config import ZERO_SHOT_MODEL

tokenizer = AutoTokenizer.from_pretrained(ZERO_SHOT_MODEL)
model = AutoModelForSequenceClassification.from_pretrained(ZERO_SHOT_MODEL)


entailment_index = model.config.label2id["entailment"]

def classify(text, labels):
    best_score = float('-inf')
    best_label = None
    for label in labels:
        hypothesis = f"This text is about {label}."
        inputs = tokenizer(text, hypothesis, return_tensors = 'pt', truncation=True)
        with torch.inference_mode():
            outputs = model(**inputs)
        entailment_score = outputs.logits[0, entailment_index].item()
        if(entailment_score > best_score):
            best_score = entailment_score
            best_label = label
    
    return {
        "label" : best_label
    }
        
    