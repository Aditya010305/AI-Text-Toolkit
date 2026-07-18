function TextAreaInput({ label, value, onChange, placeholder = "", rows = 6, maxLength, showCounter = false }) {
  const count = value?.length || 0;
  const nearLimit = maxLength && count > maxLength * 0.9;
  const id = label ? `textarea-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined;

  return (
    <div className="w-full mb-4">
      {label && (
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          {showCounter && (
            <span className={`text-xs ${nearLimit ? "text-red-500" : "text-gray-400"}`}>
              {count}
              {maxLength ? ` / ${maxLength}` : ""}
            </span>
          )}
        </div>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>
  );
}

export default TextAreaInput;