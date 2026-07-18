import { Sparkles } from "lucide-react";

function EmptyState({ message = "Your result will appear here." }) {
  return (
    <div className="w-full mt-6 p-10 rounded-xl border border-dashed border-gray-200 flex flex-col items-center text-center text-gray-400">
      <Sparkles className="w-6 h-6 mb-2" aria-hidden="true" />
      <p className="text-sm">{message}</p>
    </div>
  );
}

export default EmptyState;