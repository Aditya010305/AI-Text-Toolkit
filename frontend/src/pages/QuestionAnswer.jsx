import { useState } from "react";
import { HelpCircle, Cpu, FileType, Sparkles, X } from "lucide-react";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import TextAreaInput from "../components/TextAreaInput";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import ResultCard from "../components/ResultCard";
import ConfidenceBar from "../components/ConfidenceBar";
import CopyButton from "../components/CopyButton";
import Toast from "../components/Toast";
import SkeletonLoader from "../components/SkeletonLoader";
import EmptyState from "../components/EmptyState";
import { useCopyToast } from "../hooks/useCopyToast";
import { answerQuestion } from "../services/api";
import { EXAMPLE_INPUTS } from "../utils/constants";

const MAX_LENGTH = 2000;

function QuestionAnswer() {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { copied, copy } = useCopyToast();

  const handleSubmit = async () => {
    if (!question.trim() || !context.trim()) {
      setError("Please provide both a question and context.");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const data = await answerQuestion(question, context);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleExample = () => {
    setError("");
    setResult(null);
    setQuestion(EXAMPLE_INPUTS.qaQuestion);
    setContext(EXAMPLE_INPUTS.qaContext);
  };

  const handleClear = () => {
    setQuestion("");
    setContext("");
    setResult(null);
    setError("");
  };

  const contextWordCount = context.trim() ? context.trim().split(/\s+/).filter(Boolean).length : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader title="Question Answering" description="Ask a question and get an answer extracted from your context." />

      <InputField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="e.g. What is the capital of France?"
      />

      <TextAreaInput
        label="Context"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        placeholder="Paste the context text here..."
        maxLength={MAX_LENGTH}
        showCounter
      />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Button onClick={handleSubmit} loading={loading} ariaLabel="Get answer">
          {loading ? "Finding Answer..." : "Get Answer"}
        </Button>
        <Button variant="ghost" size="sm" onClick={handleExample} ariaLabel="Use example question and context">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          Use Example
        </Button>
        {(question || context || result) && (
          <Button variant="ghost" size="sm" onClick={handleClear} ariaLabel="Clear inputs and result">
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            Clear
          </Button>
        )}
      </div>

      <ErrorMessage message={error} />
      {loading && <SkeletonLoader lines={4} />}

      {!loading && result && (
        <ResultCard icon={HelpCircle} title="Answer Result" accent="blue">
          <div className="mb-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Question</p>
            <p className="text-sm text-gray-700">{question}</p>
          </div>

          <div className="flex items-start justify-between gap-4 mb-5 p-4 rounded-xl bg-blue-50 border border-blue-100">
            <div>
              <p className="text-xs text-blue-500 mb-1.5">Answer</p>
              <p className="text-xl font-semibold text-blue-900">{result.answer}</p>
            </div>
            <CopyButton label="Copy Answer" onCopy={() => copy(result.answer)} />
          </div>

          {typeof result.confidence === "number" && (
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500">Confidence</span>
                <span className="text-xs font-semibold text-gray-700">{(result.confidence * 100).toFixed(0)}%</span>
              </div>
              <ConfidenceBar value={result.confidence * 100} colorClass="bg-blue-600" label="Answer confidence" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <FileType className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Context Length</p>
                <p className="text-sm text-gray-700 font-medium">{contextWordCount} words</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Model</p>
                <p className="text-sm text-gray-700 font-medium">RoBERTa SQuAD2</p>
              </div>
            </div>
          </div>
        </ResultCard>
      )}

      {!loading && !result && !error && <EmptyState message="Provide a question and context, then click Get Answer." />}

      <Toast show={copied} />
    </div>
  );
}

export default QuestionAnswer;