// src/pages/LoginPage.tsx

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
          Login
        </button>
      </div>
    </div>
  );
}
