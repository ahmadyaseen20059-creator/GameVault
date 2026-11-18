
function Register() {
  return (
    <div className="page-container">
      <h1>Create Account</h1>
      <p>Join GameVault and manage your game library!</p>

      <form>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          disabled
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          disabled
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Create a password"
          disabled
        />

        <button type="button" disabled>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
