import { WHY_PROJECT } from "../utils/constants";

function WhyProject() {
  return (
    <section className="py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Why This Project
      </h2>
      <p className="text-center text-gray-500 mb-14">
        What makes AI Text Toolkit stand out
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_PROJECT.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 mb-4" />
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyProject;