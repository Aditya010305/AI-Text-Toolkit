import { useState } from "react";
import { Tags, Cpu, Award, Sparkles, X } from "lucide-react";
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
import { classifyZeroShot } from "../services/api";
import { EXAMPLE_INPUTS } from "../utils/constants";

const MAX_LENGTH = 1000;

function ZeroShot() {
  const [text, setText] = useState("");
  const [labelsInput, setLabelsInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { copied, copy } = useCopyToast();

  const handleSubmit = async () => {
    const labels = labelsInput.split(",").map((l) => l.trim()).filter(Boolean);
    if (!text.trim()) {
      setError("Please enter some text to classify.");
      return;
    }
    if (labels.length === 0) {
      setError("Please enter at least one label (comma-separated).");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const data = await classifyZeroShot(text, labels);
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
    setText(EXAMPLE_INPUTS.zeroShotText);
    setLabelsInput(EXAMPLE_INPUTS.zeroShotLabels);
  };

  const handleClear = () => {
    setText("");
    setLabelsInput("");
    setResult(null);
    setError("");
  };

  const sortedPredictions = result ? [...result.predictions].sort((a, b) => b.score - a.score) : [];

  const handleCopy = () => {
    const summary = sortedPredictions.map((p, i) => `${i + 1}. ${p.label}: ${(p.score * 100).toFixed(0)}%`).join("\n");
    copy(summary);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader title="Zero-Shot Classification" description="Classify text into custom categories without any training." />

      <TextAreaInput
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        maxLength={MAX_LENGTH}
        showCounter
      />

      <InputField
        label="Labels (comma-separated)"
        value={labelsInput}
        onChange={(e) => setLabelsInput(e.target.value)}
        placeholder="sports, politics, technology"
      />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Button onClick={handleSubmit} loading={loading} ariaLabel="Classify text">
          {loading ? "Classifying..." : "Classify"}
        </Button>
        <Button variant="ghost" size="sm" onClick={handleExample} ariaLabel="Use example text and labels">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          Use Example
        </Button>
        {(text || labelsInput || result) && (
          <Button variant="ghost" size="sm" onClick={handleClear} ariaLabel="Clear inputs and result">
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            Clear
          </Button>
        )}
      </div>

      <ErrorMessage message={error} />
      {loading && <SkeletonLoader lines={5} />}

      {!loading && result && (
        <ResultCard icon={Tags} title="Prediction Results" accent="purple">
          <div className="flex justify-end mb-3">
            <CopyButton label="Copy Results" onCopy={handleCopy} />
          </div>

          <div className="space-y-4 mb-5">
            {sortedPredictions.map((pred, index) => {
              const isWinner = index === 0;
              return (
                <div key={pred.label} className={`p-3 rounded-xl transition-all duration-300 ${isWinner ? "bg-purple-50 border border-purple-200" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-gray-400 w-4">#{index + 1}</span>
                      {isWinner && <Award className="w-4 h-4 text-purple-600" aria-hidden="true" />}
                      <span className={`text-sm font-medium ${isWinner ? "text-purple-700" : "text-gray-700"}`}>{pred.label}</span>
                    </div>
                    <span className={`text-xs font-semibold ${isWinner ? "text-purple-700" : "text-gray-500"}`}>
                      {(pred.score * 100).toFixed(0)}%
                    </span>
                  </div>
                  <ConfidenceBar value={pred.score * 100} colorClass={isWinner ? "bg-purple-600" : "bg-gray-400"} label={`${pred.label} score`} />
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
            <Cpu className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-400">Model</p>
              <p className="text-sm text-gray-700 font-medium">BART MNLI</p>
            </div>
          </div>
        </ResultCard>
      )}

      {!loading && !result && !error && <EmptyState message="Enter text and labels, then click Classify to see ranked predictions." />}

      <Toast show={copied} />
    </div>
  );
}

export default ZeroShot;