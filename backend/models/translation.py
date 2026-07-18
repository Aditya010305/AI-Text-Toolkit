from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

from backend.config import TRANSLATION_MODEL

tokenizer = AutoTokenizer.from_pretrained(TRANSLATION_MODEL)
model = AutoModelForSeq2SeqLM.from_pretrained(TRANSLATION_MODEL)


def translate(text):
    inputs = tokenizer(text, return_tensors = 'pt', truncation=True)
    with torch.inference_mode():
        generated_ids = model.generate(**inputs)
    translated_text = tokenizer.decode(generated_ids[0], skip_special_tokens = True)
    return {'translation' : translated_text} 
    
