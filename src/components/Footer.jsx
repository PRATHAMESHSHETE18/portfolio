import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/60 bg-dark-950">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold gradient-text">PS</span>
            <span className="text-sm text-dark-500 font-medium">
              Prathamesh Shete
            </span>
          </div>

          {/* Quick contact */}
          <div className="flex items-center gap-6 text-dark-500 text-sm">
            <a
              href="mailto:prathameshshete900@gmail.com"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <HiOutlineMail size={16} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="tel:+919284876012"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <HiOutlinePhone size={16} />
              <span className="hidden sm:inline">Phone</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-dark-600">
            © {year} Prathamesh Shete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
