import { useActionState, useContext } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../api/auth";
import { UserContext } from "../../contexts/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate('/games');
    };
    const [_, loginAction] = useActionState(loginHandler, { email: '', password: '' });
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action={loginAction}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}