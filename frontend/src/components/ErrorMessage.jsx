import { AlertCircle } from "lucide-react";

function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div
      role="alert"
      className="w-full mt-4 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-slide-up"
    >
      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;