from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

from common.config import SUMMARIZATION_MODEL

tokenizer = AutoTokenizer.from_pretrained(SUMMARIZATION_MODEL)
model = AutoModelForSeq2SeqLM.from_pretrained(SUMMARIZATION_MODEL)

def summarize(text):
    inputs = tokenizer(text, return_tensors = 'pt', truncation=True, max_length=1024)
    with torch.inference_mode():
        generated_ids = model.generate(
            **inputs,
            max_new_tokens = 40,
            min_new_tokens = 15
        )
    summarized_text = tokenizer.decode(generated_ids[0], skip_special_tokens = True)
    return {
        "summary" : summarized_text
    }
