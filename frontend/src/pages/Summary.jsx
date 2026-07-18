import { useState } from "react";
import { FileText, Cpu, ArrowDownWideNarrow, Sparkles, X, BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";
import TextAreaInput from "../components/TextAreaInput";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import ResultCard from "../components/ResultCard";
import CopyButton from "../components/CopyButton";
import Toast from "../components/Toast";
import SkeletonLoader from "../components/SkeletonLoader";
import EmptyState from "../components/EmptyState";
import { useCopyToast } from "../hooks/useCopyToast";
import { summarizeText } from "../services/api";
import { EXAMPLE_INPUTS } from "../utils/constants";

const MAX_LENGTH = 4000;
const READING_WPM = 200;

function Summary() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { copied, copy } = useCopyToast();

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter some text to summarize.");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const data = await summarizeText(text);
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
    setText(EXAMPLE_INPUTS.summary);
  };

  const handleClear = () => {
    setText("");
    setResult(null);
    setError("");
  };

  const originalLength = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const summaryLength = result ? result.summary.trim().split(/\s+/).filter(Boolean).length : 0;
  // Compression = ((Original - Summary) / Original) × 100, clamped to never go negative
  const compression =
    originalLength > 0
      ? Math.max(0, ((originalLength - summaryLength) / originalLength) * 100).toFixed(1)
      : "0.0";
  const readingTime = summaryLength > 0 ? Math.max(1, Math.ceil(summaryLength / READING_WPM)) : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader title="Summarization" description="Condense long text into a short, readable summary." />

      <TextAreaInput
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste a long piece of text here..."
        rows={8}
        maxLength={MAX_LENGTH}
        showCounter
      />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Button onClick={handleSubmit} loading={loading} ariaLabel="Summarize text">
          {loading ? "Summarizing..." : "Summarize"}
        </Button>
        <Button variant="ghost" size="sm" onClick={handleExample} ariaLabel="Use example text">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          Use Example
        </Button>
        {(text || result) && (
          <Button variant="ghost" size="sm" onClick={handleClear} ariaLabel="Clear input and result">
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            Clear
          </Button>
        )}
      </div>

      <ErrorMessage message={error} />
      {loading && <SkeletonLoader lines={5} />}

      {!loading && result && (
        <ResultCard icon={FileText} title="Summary Result" accent="purple">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Summary</p>
              <p className="text-base text-gray-800 leading-relaxed">{result.summary}</p>
            </div>
            <CopyButton label="Copy Summary" onCopy={() => copy(result.summary)} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100 mb-4">
            <div>
              <p className="text-xs text-gray-400">Original Length</p>
              <p className="text-sm text-gray-700 font-medium">{originalLength} words</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Summary Length</p>
              <p className="text-sm text-gray-700 font-medium">{summaryLength} words</p>
            </div>
            <div className="flex items-center gap-1.5">
              <ArrowDownWideNarrow className="w-4 h-4 text-green-500" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Compression</p>
                <p className="text-sm text-green-600 font-medium">{compression}%</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Reading Time</p>
                <p className="text-sm text-gray-700 font-medium">~{readingTime} min</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Cpu className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-400">Model</p>
              <p className="text-sm text-gray-700 font-medium">DistilBART CNN</p>
            </div>
          </div>
        </ResultCard>
      )}

      {!loading && !result && !error && <EmptyState message="Paste some text and click Summarize to see the result." />}

      <Toast show={copied} />
    </div>
  );
}

export default Summary;