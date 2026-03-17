export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#about" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white text-xs font-bold group-hover:bg-blue-700 transition-colors">
              JH
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Janik Hawk
            </span>
          </a>

          <p className="text-sm text-gray-400">
            © {year} Janik Hawk. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">Senior Frontend Engineer</p>
        </div>
      </div>
    </footer>
  );
}
