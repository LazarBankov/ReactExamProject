import { Link } from "react-router";

export default function ErrorComponent() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="flex items-center justify-center p-8 bg-red-100 rounded-lg shadow-xl space-x-4">
          <div className="flex-shrink-0">
            {/* You can use any error icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4v.01M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-red-800 mb-2">
              Something went wrong!
            </h2>

            <Link
              to="/"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200 mt-2"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    )
}