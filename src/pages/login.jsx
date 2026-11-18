
function Login() {
  return (
    <div className="page-container">
      <h1>Login</h1>
      <p>Welcome back to GameVault!</p>

      <form>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          disabled
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          disabled
        />

        <button type="button" disabled>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
