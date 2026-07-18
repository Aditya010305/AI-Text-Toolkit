import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-500 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to={ROUTES.HOME}
        className="inline-block px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;