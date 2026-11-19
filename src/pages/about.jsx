
function About() {
  return (
    <div className="page-container">
      <h1>About GameVault 🎮</h1>

      <p>
        GameVault is a personal game library application
        that helps users organize and manage their favorite games.
      </p>

      <h2>Our Features</h2>

      <ul style={{ listStylePosition: "inside", padding: 0, textAlign: "center" }}>
        <li>View your personal game collection.</li>
        <li>Search games by name.</li>
        <li>Sort games by name, rating, and release year.</li>
        <li>View detailed information about each game.</li>
        <li>Track your game status.</li>
      </ul>

      
    </div>
  );
}

export default About;
