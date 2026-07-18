from transformers import AutoTokenizer, AutoModelForQuestionAnswering
import torch

from common.config import QA_MODEL

tokenizer = AutoTokenizer.from_pretrained(QA_MODEL)
model = AutoModelForQuestionAnswering.from_pretrained(QA_MODEL)

def answer(question, context):
    inputs = tokenizer(question, context, return_tensors = 'pt', truncation=True)
    with torch.inference_mode():
        outputs = model(**inputs)
    start_index = outputs.start_logits.argmax()
    end_index = outputs.end_logits.argmax()
    ans_tokens = inputs.input_ids[0, start_index : end_index+1]
    ans = tokenizer.decode(
        ans_tokens,
        skip_special_tokens=True
    )
    return {
        "answer" : ans
    }