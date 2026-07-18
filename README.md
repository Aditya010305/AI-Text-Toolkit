# 🤖 AI Text Toolkit

A modern AI-powered NLP web application built using **React**, **FastAPI**, and **Hugging Face Transformers**.

AI Text Toolkit is a full-stack AI application that brings together multiple Natural Language Processing (NLP) tasks in a single modern web interface powered by Hugging Face Transformer models and FastAPI.

---

## ✨ Features

### 😊 Sentiment Analysis
Analyze the emotional tone of text.

- Positive, Neutral, Negative classification
- Confidence score
- Fast inference using Hugging Face Transformers

**Model:** CardiffNLP RoBERTa Twitter Sentiment

---

### 🌍 Translation
Translate English text into French.

Features:
- Original Text
- Translated Text
- Language Information

**Model:** Helsinki-NLP

---

### 📝 Text Summarization
Generate concise summaries from long paragraphs.

Features:
- AI-generated Summary
- Compression Statistics
- Reading Time Estimate
- Word Count

**Model:** DistilBART CNN

---

### ❓ Question Answering
Extract answers from a given context.

Features:
- Extractive Question Answering
- Confidence Score
- Context Statistics

**Model:** RoBERTa SQuAD2

---

### 🏷️ Zero-Shot Classification
Classify text into custom categories without additional training.

Features:
- Custom Labels
- Ranked Predictions
- Confidence Scores

**Model:** BART MNLI

---

# 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- FastAPI
- Python
- Pydantic
- Uvicorn

### AI / ML
- Hugging Face Transformers
- PyTorch

### Deployment
- Vercel
- Render

---

# 📂 Project Structure

```
AI-Text-Toolkit
│
├── backend
│   ├── app.py
│   ├── config.py
│   ├── models
│   ├── requirements.txt
│   └── hf_models (ignored)
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── utils
│
├── README.md
└── .gitignore
```

---

# 🚀 Installation

## Clone the repository

```bash
git clone https://github.com/Aditya010305/AI-Text-Toolkit.git
```

## Backend

```bash
cd backend

python -m venv .venv
```

Activate the virtual environment

**Windows**

```bash
.venv\Scripts\activate
```

**macOS/Linux**

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the backend

```bash
uvicorn app:app --reload
```

> **Note:** During the first startup, the required Hugging Face models will be downloaded automatically. Depending on your internet connection, this may take a few minutes.

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the frontend folder.

For local development:

```env
VITE_API_BASE_URL=http://localhost:8000
```

For deployment:

```env
VITE_API_BASE_URL=https://your-render-url.onrender.com
```

---

# 📡 API Endpoints

| Endpoint | Description |
|----------|-------------|
| POST `/sentiment` | Sentiment Analysis |
| POST `/translation` | Translation |
| POST `/summarization` | Text Summarization |
| POST `/question-answering` | Question Answering |
| POST `/zero-shot` | Zero-Shot Classification |

---

# 🧠 Models Used

| Task | Model |
|------|-------|
| Sentiment Analysis | CardiffNLP RoBERTa Twitter Sentiment |
| Translation | Helsinki-NLP Opus-MT |
| Summarization | DistilBART CNN |
| Question Answering | RoBERTa SQuAD2 |
| Zero-Shot Classification | BART MNLI |

---

# 🎯 Future Improvements

- Dark Mode
- Multiple Translation Languages
- Named Entity Recognition (NER)
- Text-to-Speech
- Speech-to-Text
- Docker Support
- Authentication
- Model Selection
- API Rate Limiting
- Better Analytics Dashboard

---

# 📚 What I Learned

This project helped me gain practical experience with:

- Hugging Face Transformers
- FastAPI REST API Development
- React + Vite
- Axios API Integration
- Tailwind CSS
- NLP Workflows
- Transformer Model Inference
- Frontend & Backend Deployment
- Building Production-Style AI Applications

---

# 👨‍💻 Author

**Aditya Pratap Singh**

- **GitHub:** [Aditya010305](https://github.com/Aditya010305)
- **LinkedIn:** [Aditya Pratap Singh](https://www.linkedin.com/in/aditya-pratap-singh-39b747327/)
- **Email:** aditya010305singh@gmail.com

---

## ⭐ Star the Repository

If you found this project useful, consider giving it a ⭐ on GitHub. It helps support the project and encourages future improvements.
