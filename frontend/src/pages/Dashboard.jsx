import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setUser({ email: "User" });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 bg-opacity-80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  OAuth App
                </h1>
                <p className="text-xs text-gray-400">Secure Authentication</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg transition duration-200 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Welcome Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-2xl p-6 sm:p-10 mb-8 sm:mb-12 border border-gray-600 hover:border-blue-500 transition duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Welcome! 👋
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                You have successfully logged in to your account
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-600 hover:border-blue-500 hover:shadow-2xl transition duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">🔒 Secure</h3>
            <p className="text-gray-400 text-sm sm:text-base">Your account is protected with JWT authentication and password encryption</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-600 hover:border-green-500 hover:shadow-2xl transition duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">⚡ Fast</h3>
            <p className="text-gray-400 text-sm sm:text-base">Lightning-fast authentication and seamless user experience</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-600 hover:border-purple-500 hover:shadow-2xl transition duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">✨ Easy</h3>
            <p className="text-gray-400 text-sm sm:text-base">Simple signup and login process with validation and error handling</p>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl shadow-2xl p-6 sm:p-10 border border-orange-400 hover:shadow-3xl transition duration-300">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                🚀 Coming Soon: Google OAuth
              </h3>
              <p className="text-orange-50 mb-4 text-base">
                We're adding Google Sign-in for even faster authentication. Stay tuned!
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-black px-4 py-2 rounded-lg text-sm font-semibold border border-white border-opacity-30">
                  ✅ Phase 2 Ready
                </div>
                <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-black px-4 py-2 rounded-lg text-sm font-semibold border border-white border-opacity-30">
                  📅 Coming Q1 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 OAuth App. All rights reserved. | Built with ❤️ using MERN Stack
          </p>
        </div>
      </footer>
    </div>
  );
}

