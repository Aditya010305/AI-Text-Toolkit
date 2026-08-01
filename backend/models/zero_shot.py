from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

from common.config import ZERO_SHOT_MODEL

tokenizer = AutoTokenizer.from_pretrained(ZERO_SHOT_MODEL)
model = AutoModelForSequenceClassification.from_pretrained(ZERO_SHOT_MODEL)


entailment_index = model.config.label2id["entailment"]

def classify(text: str, labels: list[str]) -> dict:
    highest_score = 0.0
    best_label = None

    for label in labels:
        hypothesis = f"This text is about {label}."

        inputs = tokenizer(
            text,
            hypothesis,
            return_tensors="pt",
            truncation=True
        )

        with torch.inference_mode():
            outputs = model(**inputs)

        probabilities = torch.softmax(outputs.logits, dim=-1)
        entailment_probability = probabilities[0, entailment_index].item()

        if entailment_probability > highest_score:
            highest_score = entailment_probability
            best_label = label

    return {
        "label": best_label,
        "confidence": round(highest_score * 100, 2)
    }
            
        