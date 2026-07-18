function OutputCard({ title, children }) {
  if (!children) return null;

  return (
    <div className="w-full mt-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
      {title && (
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {title}
        </h3>
      )}
      <div className="text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}

export default OutputCard;