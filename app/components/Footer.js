export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">HostelFlow</h3>
            </div>
            <p className="text-sm text-gray-400">
              A modern web platform designed to streamline hostel complaint management.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/login" className="hover:text-indigo-400 transition-colors">Login</a></li>
              <li><a href="/register" className="hover:text-indigo-400 transition-colors">Register</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">For</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/student" className="hover:text-indigo-400 transition-colors">Students</a></li>
              <li><a href="/admin" className="hover:text-indigo-400 transition-colors">Administrators</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} HostelFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
