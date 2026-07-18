export const API_BASE_URL = "http://127.0.0.1:8000";

export const ROUTES = {
  HOME: "/",
  SENTIMENT: "/sentiment",
  TRANSLATION: "/translation",
  SUMMARY: "/summary",
  QUESTION_ANSWER: "/question-answer",
  ZERO_SHOT: "/zero-shot",
};

export const TOOLS = [
  { title: "Sentiment Analysis", description: "Detect whether text expresses a positive or negative sentiment.", path: ROUTES.SENTIMENT, icon: "sentiment" },
  { title: "Translation", description: "Translate text between languages instantly.", path: ROUTES.TRANSLATION, icon: "translation" },
  { title: "Summarization", description: "Condense long text into a short, readable summary.", path: ROUTES.SUMMARY, icon: "summary" },
  { title: "Question Answering", description: "Get precise answers extracted from a given context.", path: ROUTES.QUESTION_ANSWER, icon: "qa" },
  { title: "Zero-Shot Classification", description: "Classify text into custom categories without training.", path: ROUTES.ZERO_SHOT, icon: "zeroshot" },
];

export const TECH_STACK = [
  { name: "Hugging Face", icon: "huggingface" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Transformers", icon: "transformers" },
];

export const WHY_PROJECT = [
  { title: "5 NLP Tools in One App", description: "Sentiment, translation, summarization, Q&A, and zero-shot classification — unified in a single toolkit." },
  { title: "Fast API Responses", description: "Optimized FastAPI backend delivers predictions with minimal latency." },
  { title: "Powered by Hugging Face", description: "Built on state-of-the-art pretrained Transformer models." },
  { title: "Fully Responsive UI", description: "A clean, modern interface that works seamlessly across devices." },
  { title: "Easy to Use", description: "Simple, intuitive workflows with clear inputs and outputs." },
];

export const MODELS_USED = [
  { tool: "Sentiment Analysis", model: "RoBERTa Twitter Sentiment" },
  { tool: "Translation", model: "Helsinki-NLP Translation" },
  { tool: "Summarization", model: "DistilBART CNN" },
  { tool: "Question Answering", model: "RoBERTa SQuAD2" },
  { tool: "Zero-Shot Classification", model: "BART MNLI" },
];

export const EXAMPLE_INPUTS = {
  sentiment: "I absolutely loved the new update — it's fast, clean, and super intuitive!",
  translation: "Good morning, I hope you have a wonderful day ahead.",
  summary:
    "Artificial intelligence is transforming industries across the globe. From healthcare to finance, AI-powered systems are helping organizations automate repetitive tasks, uncover insights from massive datasets, and make faster, more accurate decisions. Natural language processing, in particular, has seen remarkable progress in recent years, enabling machines to understand and generate human language with increasing fluency. As these technologies mature, businesses of all sizes are finding new ways to integrate AI into their everyday workflows.",
  qaQuestion: "What is the capital of France?",
  qaContext:
    "France is a country in Western Europe. Its capital, Paris, is known for its art, fashion, and culture, and is home to landmarks such as the Eiffel Tower and the Louvre Museum.",
  zeroShotText: "The new smartphone features a faster processor and improved camera system.",
  zeroShotLabels: "technology, sports, politics",
};