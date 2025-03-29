import { Button } from "../ui/button";

export default function Login() {
  return (

<div className="min-h-screen flex items-center justify-center bg-[#f173e7] border-0">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
    <form className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <Button type="submit" className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-200">
        Login
      </Button>
    </form>
  </div>
</div>
  );
}
