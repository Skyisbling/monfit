import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prototype only — no backend yet
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <span>মন</span>FIT
        </div>

        <p className="eyebrow dark">WELCOME BACK</p>

        <h1>Welcome back.</h1>

        <p className="auth-subtitle">
          Login to continue to your MONFIT account.
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>

          <button type="submit" className="auth-submit">
            Login →
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;