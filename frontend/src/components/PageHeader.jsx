function PageHeader({ title, description }) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-500 max-w-xl mx-auto">{description}</p>
    </div>
  );
}

export default PageHeader;