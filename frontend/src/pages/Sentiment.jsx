import { useState } from "react";
import { Smile, Frown, Meh, Cpu, Clock, Sparkles, X } from "lucide-react";
import PageHeader from "../components/PageHeader";
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
import { analyzeSentiment } from "../services/api";
import { EXAMPLE_INPUTS } from "../utils/constants";

const SENTIMENT_STYLES = {
  positive: { text: "text-green-600", bg: "bg-green-50", bar: "bg-green-500", accent: "green", Icon: Smile },
  negative: { text: "text-red-600", bg: "bg-red-50", bar: "bg-red-500", accent: "red", Icon: Frown },
  neutral: { text: "text-gray-600", bg: "bg-gray-100", bar: "bg-gray-400", accent: "gray", Icon: Meh },
};

function getSentimentStyle(label) {
  return SENTIMENT_STYLES[label?.toLowerCase()] || SENTIMENT_STYLES.neutral;
}

const MAX_LENGTH = 1000;

function Sentiment() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inferenceTime, setInferenceTime] = useState(null);
  const { copied, copy } = useCopyToast();

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter some text to analyze.");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    const start = performance.now();
    try {
      const data = await analyzeSentiment(text);
      setInferenceTime(((performance.now() - start) / 1000).toFixed(2));
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
    setText(EXAMPLE_INPUTS.sentiment);
  };

  const handleClear = () => {
    setText("");
    setResult(null);
    setError("");
    setInferenceTime(null);
  };

  const style = result ? getSentimentStyle(result.label) : null;

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader title="Sentiment Analysis" description="Analyze whether your text expresses a positive or negative sentiment." />

      <TextAreaInput
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        maxLength={MAX_LENGTH}
        showCounter
      />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Button onClick={handleSubmit} loading={loading} ariaLabel="Analyze sentiment">
          {loading ? "Analyzing..." : "Analyze"}
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
      {loading && <SkeletonLoader lines={4} />}

      {!loading && result && style && (
        <ResultCard icon={style.Icon} title="Sentiment Result" accent={style.accent}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${style.bg}`}>
                <style.Icon className={`w-5 h-5 ${style.text}`} />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Sentiment</p>
                <p className={`text-lg font-semibold ${style.text}`}>{result.label}</p>
              </div>
            </div>
            <CopyButton
              label="Copy Result"
              onCopy={() => copy(`Sentiment: ${result.label} (${(result.confidence * 100).toFixed(2)}% confidence)`)}
            />
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500">Confidence</span>
              <span className="text-xs font-semibold text-gray-700">{(result.confidence * 100).toFixed(2)}%</span>
            </div>
            <ConfidenceBar value={result.confidence * 100} colorClass={style.bar} label="Sentiment confidence" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Model</p>
                <p className="text-sm text-gray-700 font-medium">RoBERTa Twitter Sentiment</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Inference Time</p>
                <p className="text-sm text-gray-700 font-medium">{inferenceTime ?? "—"} sec</p>
              </div>
            </div>
          </div>
        </ResultCard>
      )}

      {!loading && !result && !error && <EmptyState message="Enter some text and click Analyze to see the sentiment result." />}

      <Toast show={copied} />
    </div>
  );
}

export default Sentiment;