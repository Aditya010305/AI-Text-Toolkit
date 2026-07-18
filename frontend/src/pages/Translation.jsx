import { useState } from "react";
import { Languages, Cpu, Sparkles, X, ArrowDown } from "lucide-react";
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
import { translateText } from "../services/api";
import { EXAMPLE_INPUTS } from "../utils/constants";

const MAX_LENGTH = 1000;

function Translation() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { copied, copy } = useCopyToast();

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter some text to translate.");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const data = await translateText(text);
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
    setText(EXAMPLE_INPUTS.translation);
  };

  const handleClear = () => {
    setText("");
    setResult(null);
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader title="Translation" description="Translate your text using a Hugging Face translation model." />

      <TextAreaInput
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        maxLength={MAX_LENGTH}
        showCounter
      />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Button onClick={handleSubmit} loading={loading} ariaLabel="Translate text">
          {loading ? "Translating..." : "Translate"}
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

      {!loading && result && (
        <ResultCard icon={Languages} title="Translation Result" accent="blue">
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-1.5">Original Text</p>
            <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
          </div>

          <div className="flex justify-center my-3">
            <ArrowDown className="w-4 h-4 text-gray-300" aria-hidden="true" />
          </div>

          <div className="flex items-start justify-between gap-4 mb-5 pb-5 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Translated Text</p>
              <p className="text-lg font-medium text-gray-900 leading-relaxed">{result.translation}</p>
            </div>
            <CopyButton label="Copy Translation" onCopy={() => copy(result.translation)} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-400">Detected Language</p>
              <p className="text-sm text-gray-700 font-medium">English</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Target Language</p>
              <p className="text-sm text-gray-700 font-medium">French</p>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-gray-400" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-400">Model</p>
                <p className="text-sm text-gray-700 font-medium">Helsinki-NLP</p>
              </div>
            </div>
          </div>
        </ResultCard>
      )}

      {!loading && !result && !error && <EmptyState message="Enter some text and click Translate to see the result." />}

      <Toast show={copied} />
    </div>
  );
}

export default Translation;