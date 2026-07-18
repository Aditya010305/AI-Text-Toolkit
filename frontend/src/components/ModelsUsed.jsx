import { Cpu } from "lucide-react";
import { MODELS_USED } from "../utils/constants";

function ModelsUsed() {
  return (
    <section className="py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">Models Used</h2>
      <p className="text-center text-gray-500 mb-12">Each tool is backed by a dedicated pretrained model</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {MODELS_USED.map((item) => (
          <div key={item.tool} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{item.model}</p>
              <p className="text-xs text-gray-400">{item.tool}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModelsUsed;