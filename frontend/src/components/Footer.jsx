import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpIcon,
} from "./icons/Icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-100 mt-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Aditya010305"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-pratap-singh-39b747327/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href="mailto:aditya010305singh@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <MailIcon className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} AI Text Toolkit. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowUpIcon className="w-4 h-4" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;