import { TECH_STACK } from "../utils/constants";

// Simple text-based badges keep this dependency-free while still looking sharp
function TechStack() {
  return (
    <section className="py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Powered By
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Built with a modern, production-ready stack
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {TECH_STACK.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
            <span className="text-sm font-medium text-gray-700">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;