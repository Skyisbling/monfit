import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prototype only — no backend yet
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <span>মন</span>FIT
        </div>

        <p className="eyebrow dark">JOIN MONFIT</p>

        <h1>Create your account.</h1>

        <p className="auth-subtitle">
          Start your fitness journey with MONFIT.
        </p>

        <form onSubmit={handleRegister}>

          <label>
            Full Name
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </label>

          <button type="submit" className="auth-submit">
            Create Account →
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;