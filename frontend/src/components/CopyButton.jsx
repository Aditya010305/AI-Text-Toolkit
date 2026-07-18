import { Copy } from "lucide-react";

function CopyButton({ onCopy, label = "Copy" }) {
  return (
    <button
      onClick={onCopy}
      aria-label={label}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 shrink-0 transition-all duration-200 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
      {label}
    </button>
  );
}

export default CopyButton;