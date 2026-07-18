import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Centralized error handler — normalizes errors so components
// can rely on a single shape: { message }
const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";
    throw new Error(message);
  }
};

export const analyzeSentiment = (text) =>
  handleRequest(apiClient.post("/sentiment", { text }));

export const translateText = (text) =>
  handleRequest(apiClient.post("/translation", { text }));

export const summarizeText = (text) =>
  handleRequest(apiClient.post("/summarization", { text }));

export const answerQuestion = (question, context) =>
  handleRequest(apiClient.post("/question-answering", { question, context }));

export const classifyZeroShot = (text, labels) =>
  handleRequest(apiClient.post("/zero-shot", { text, labels }));

export default apiClient;