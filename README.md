# 🤖 AI Text Toolkit

A full-stack AI-powered Natural Language Processing (NLP) application built with **React**, **FastAPI**, **PyTorch**, and **Hugging Face Transformers**.

AI Text Toolkit brings together multiple NLP tasks in a single modern web interface while performing **local transformer inference** using pre-trained Hugging Face models.

---

# ✨ Features

## 😊 Sentiment Analysis

Analyze the emotional tone of text.

**Features**

- Positive / Neutral / Negative prediction
- Fine-grained sentiment label
- Confidence score

**Model**

- CardiffNLP Twitter RoBERTa Sentiment

---

## 🌍 Translation

Translate English text into French.

**Features**

- English → French translation
- Transformer-based sequence generation
- Fast local inference

**Model**

- Helsinki-NLP Opus-MT

---

## 📝 Text Summarization

Generate concise summaries from long paragraphs.

**Features**

- Abstractive summarization
- Optimized generation
- Reading-friendly output

**Model**

- DistilBART CNN

---

## ❓ Question Answering

Extract answers directly from a given context.

**Features**

- Extractive Question Answering
- Context-based answer extraction
- Span prediction using Transformers

**Model**

- RoBERTa SQuAD2

---

## 🏷️ Zero-Shot Classification

Classify text into custom labels without additional training.

**Features**

- Custom labels
- Natural language inference
- No model fine-tuning required

**Model**

- BART MNLI

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router

## Backend

- FastAPI
- Python
- Pydantic
- Uvicorn

## AI / Machine Learning

- Hugging Face Transformers
- PyTorch

---

# 🏗 Architecture

```text
                React Frontend
                       │
                 Axios HTTP Requests
                       │
                 FastAPI REST API
                       │
        ┌──────────────┼──────────────┐
        │              │              │
 Sentiment      Translation     Summarization
        │              │              │
        ├──────────────┼──────────────┤
                       │
             Question Answering
                       │
             Zero-Shot Classification
                       │
        Hugging Face Transformers
                       │
     AutoTokenizer + AutoModel Classes
                       │
                    PyTorch
                       │
             Local Model Inference
```

---

# 📂 Project Structure

```text
AI-Text-Toolkit
│
├── backend
│   ├── app.py
│   ├── common
│   │   ├── config.py
│   │   └── schemas.py
│   │
│   ├── models
│   │   ├── sentiment.py
│   │   ├── translation.py
│   │   ├── summarization.py
│   │   ├── question_answering.py
│   │   └── zero_shot.py
│   │
│   ├── services
│   │   ├── sentiment/
│   │   ├── translation/
│   │   ├── summarization/
│   │   ├── qa/
│   │   └── zero_shot/
│   │
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── screenshots
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Aditya010305/AI-Text-Toolkit.git

cd AI-Text-Toolkit
```

---

## 2. Backend Setup

Move to the backend folder.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv .venv
```

Activate the virtual environment.

### Windows

```bash
.venv\Scripts\activate
```

### macOS / Linux

```bash
source .venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Start the FastAPI server.

```bash
uvicorn app:app --reload
```

Open the API documentation.

```
http://127.0.0.1:8000/docs
```

> **Note**
>
> On the first run, Hugging Face Transformers automatically downloads the required pre-trained models and caches them locally. Depending on your internet connection, this may take several minutes. Subsequent runs load the models directly from the local cache.

---

## 3. Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

---

# 📡 API Endpoints

| Endpoint | Description |
|-----------|-------------|
| POST `/sentiment` | Sentiment Analysis |
| POST `/translation` | English to French Translation |
| POST `/summarization` | Text Summarization |
| POST `/question-answering` | Context-based Question Answering |
| POST `/zero-shot-classification` | Zero-Shot Text Classification |

---

# 🧠 Models Used

| NLP Task | Hugging Face Model |
|----------|--------------------|
| Sentiment Analysis | CardiffNLP Twitter RoBERTa Sentiment |
| Translation | Helsinki-NLP Opus-MT (English → French) |
| Summarization | DistilBART CNN |
| Question Answering | RoBERTa SQuAD2 |
| Zero-Shot Classification | Facebook BART Large MNLI |

---

# 📈 Skills Demonstrated

- Natural Language Processing (NLP)
- Transformer-based Deep Learning
- Hugging Face Transformers
- PyTorch Model Inference
- FastAPI REST API Development
- React Frontend Development
- Axios API Integration
- Modular Backend Architecture
- JSON-based Client–Server Communication

---

# 🔮 Future Improvements

- Multiple translation languages
- Named Entity Recognition (NER)
- Text-to-Speech
- Speech-to-Text
- Batch inference
- Docker support
- Authentication
- Model selection
- API rate limiting
- Performance benchmarking

---

# 📚 What I Learned

This project helped me gain practical experience with:

- Building AI-powered full-stack applications
- Working with Hugging Face Transformers
- Local transformer inference using PyTorch
- Tokenization and text preprocessing
- Sequence generation models
- Extractive Question Answering
- Zero-Shot Classification
- FastAPI backend development
- REST API design
- React + Vite frontend development
- API integration using Axios
- Modular software architecture

---

# 👨‍💻 Author

**Aditya Pratap Singh**

**GitHub**

https://github.com/Aditya010305

**LinkedIn**

https://www.linkedin.com/in/aditya-pratap-singh-39b747327/

**Email**

aditya010305singh@gmail.com