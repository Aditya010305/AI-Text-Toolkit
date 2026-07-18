import { Check } from "lucide-react";

function Toast({ show, message = "Copied to clipboard" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm shadow-lg transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <Check className="w-4 h-4 text-green-400" aria-hidden="true" />
      {show ? message : ""}
    </div>
  );
}

export default Toast;