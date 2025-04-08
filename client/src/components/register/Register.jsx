import { useRegister } from "../../api/auth";
import { useUserContext } from "../../contexts/Context";
import { useNavigate } from "react-router";

import { Button } from "../ui/button";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useRegister();
  const { userLoginHandler } = useUserContext();

  const registerHandler = async (formData) => {
      const { email, password, username } = Object.fromEntries(formData);

      const confirmPassword = formData.get('confirm-password');
    
      if (password !== confirmPassword) {
          console.log('Password missmatch');

          return;
      }

      const authData = await register(email, password, username);

      userLoginHandler(authData);

      navigate('/');
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f173e7] border-0">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
          <form className="space-y-4" action={registerHandler}>
            <div className="form-control flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control flex flex-col">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Username"
              />
            </div>
            <div className="form-control flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-control flex flex-col">
              <label htmlFor="con-pass" className="text-sm font-medium text-gray-700">
                Re-password
              </label>
              <input
                type="password" name="confirm-password" id="confirm-password"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
  
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    );
}