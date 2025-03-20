
export default function Register() {



    return (
        <div className="register-container">
            <h2>Register</h2>
            <form>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}