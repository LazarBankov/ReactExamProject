
export default function Login() {

    
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form >
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