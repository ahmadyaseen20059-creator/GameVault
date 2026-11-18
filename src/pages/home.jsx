
import { useState } from "react";

const initialGames = [
  {
    id: 1,
    name: "Elden Ring",
    genre: "RPG",
    status: "Completed",
    rating: 9.5,
    year: 2022,
    description: "An open-world action RPG."
  },
  {
    id: 2,
    name: "Black Myth: Wukong",
    genre: "Action RPG",
    status: "Playing",
    rating: 8.9,
    year: 2024,
    description: "An action RPG inspired by Journey to the West."
  },
  {
    id: 3,
    name: "Lies of P",
    genre: "Soulslike",
    status: "Completed",
    rating: 8.4,
    year: 2023,
    description: "A dark adventure inspired by Pinocchio."
  },
  {
    id: 4,
    name: "Sekiro",
    genre: "Action",
    status: "Backlog",
    rating: 9.2,
    year: 2019,
    description: "A challenging action game set in Japan."
  },
  {
    id: 5,
    name: "Dark Souls III",
    genre: "Soulslike",
    status: "Backlog",
    rating: 9.0,
    year: 2016,
    description: "An intense dark fantasy action RPG."
  },
  {
    id: 6,
    name: "Ghost of Tsushima",
    genre: "Action Adventure",
    status: "Completed",
    rating: 9.3,
    year: 2020,
    description: "Explore Japan as a samurai."
  },
  {
    id: 7,
    name: "God of War Ragnarok",
    genre: "Action Adventure",
    status: "Completed",
    rating: 9.4,
    year: 2022,
    description: "Continue Kratos and Atreus's journey."
  },
  {
    id: 8,
    name: "Resident Evil 4 Remake",
    genre: "Survival Horror",
    status: "Completed",
    rating: 9.0,
    year: 2023,
    description: "A survival horror action adventure."
  },
  {
    id: 9,
    name: "Alan Wake 2",
    genre: "Survival Horror",
    status: "Backlog",
    rating: 8.8,
    year: 2023,
    description: "A psychological survival horror experience."
  },
  {
    id: 10,
    name: "Death Stranding 2",
    genre: "Action Adventure",
    status: "Backlog",
    rating: 8.7,
    year: 2025,
    description: "A journey across a connected world."
  }
];

function GameCard({ game, onSelect }) {
  return (
    <div className="game-card">
      <button
        className="game-title"
        onClick={() => onSelect(game)}
      >
        {game.name}
      </button>
    </div>
  );
}

function Home() {
  const [games, setGames] = useState(initialGames);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedGame, setSelectedGame] = useState(null);

  function changeStatus(id) {
    const updatedGames = games.map((game) => {
      if (game.id === id) {
        let newStatus;

        if (game.status === "Backlog") {
          newStatus = "Playing";
        } else if (game.status === "Playing") {
          newStatus = "Completed";
        } else {
          newStatus = "Backlog";
        }

        return { ...game, status: newStatus };
      }

      return game;
    });

    setGames(updatedGames);

    if (selectedGame && selectedGame.id === id) {
      const updatedSelectedGame = updatedGames.find(
        (game) => game.id === id
      );

      setSelectedGame(updatedSelectedGame);
    }
  }

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    if (sortBy === "year") {
      return b.year - a.year;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <div className="app">
      <header>
        <h1>GameVault 🎮</h1>
        <p>Your Personal Game Library</p>
      </header>

      <main>
        <h2>My Games</h2>

        <div className="controls">
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="year">Sort by Year</option>
          </select>
        </div>

        {selectedGame && (
          <div className="game-details">
            <h2>{selectedGame.name}</h2>

            <p>Genre: {selectedGame.genre}</p>
            <p>Status: {selectedGame.status}</p>
            <p>Rating: {selectedGame.rating}/10</p>
            <p>Release Year: {selectedGame.year}</p>
            <p>{selectedGame.description}</p>

            <button
              onClick={() => changeStatus(selectedGame.id)}
            >
              Change Status
            </button>

            <button
              onClick={() => setSelectedGame(null)}
            >
              Close Details
            </button>
          </div>
        )}

        <div className="games-list">
          {sortedGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelect={setSelectedGame}
            />
          ))}
        </div>

        {sortedGames.length === 0 && (
          <p>No games found.</p>
        )}
      </main>
    </div>
  );
}

export default Home;
