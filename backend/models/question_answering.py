from transformers import AutoTokenizer, AutoModelForQuestionAnswering
import torch

from common.config import QA_MODEL

tokenizer = AutoTokenizer.from_pretrained(QA_MODEL)
model = AutoModelForQuestionAnswering.from_pretrained(QA_MODEL)

def answer(question: str, context: str) -> dict:
    inputs = tokenizer(question, context, return_tensors = 'pt', truncation=True)
    with torch.inference_mode():
        outputs = model(**inputs)
    start_index = torch.argmax(outputs.start_logits).item()
    end_index = torch.argmax(outputs.end_logits).item()

    if end_index < start_index:
        end_index = start_index
    answer_tokens = inputs.input_ids[0, start_index : end_index+1]
    answer = tokenizer.decode(
        answer_tokens,
        skip_special_tokens=True
    )
    return {
        "answer" : answer
    }