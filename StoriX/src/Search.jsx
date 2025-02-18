import { useState } from "react";
import "./App.css";

const Search = () => {
  const [suggestions, setSuggestions] = useState([
    { id: 1, name: "John Doe", followed: false },
    { id: 2, name: "Jane Smith", followed: false },
    { id: 3, name: "Mike Johnson", followed: false },
    { id: 4, name: "Emily Brown", followed: false },
  ]);

  const handleFollow = (id) => {
    setSuggestions((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, followed: !user.followed } : user
      )
    );
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="suggestions-list">
        {suggestions.map((user) => (
          <div key={user.id} className="suggestion-item">
            <div className="suggest-profile">
                <img src="https://images.pexels.com/photos/30462488/pexels-photo-30462488/free-photo-of-curious-cat-peeking-out-of-istanbul-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={user.id} className="user-img" />
                <span>{user.name}</span>
            </div>
            <button
              className={`follow-btn ${user.followed ? "following" : ""}`}
              onClick={() => handleFollow(user.id)}
            >
              {user.followed ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;