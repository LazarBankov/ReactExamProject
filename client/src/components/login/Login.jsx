import { useActionState, useContext } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../api/auth";
import { UserContext } from "../../contexts/Context";

import { Button } from "../ui/button";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLogin();
  const { userLoginHandler } = useContext(UserContext);

  const loginHandler = async (_, formData) => {
    const values = Object.fromEntries(formData);

    try {
        const authData = await login(values.email, values.password);
        userLoginHandler(authData);


        navigate("/");
    } catch (err) {
        console.error(err.message)
    }
  }
  const [ _, loginAction, isPending ] = useActionState(loginHandler, { email: '', password: '' });


  return (

<div className="min-h-screen flex items-center justify-center bg-[#f5c7f1] border-0">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
    <form className="space-y-4" action={loginAction}>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
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
          name="password"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          
        />
      </div>

      <Button type="submit" className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-200" disabled={isPending}>
        Login
      </Button>
    </form>
  </div>
</div>
  );
}
