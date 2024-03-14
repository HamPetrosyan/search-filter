import React, { useState } from "react";
import "./SearchFilter.css";

const fruitsList = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
];

function SearchFilter() {
  const [searchFruit, setSearchFruit] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruitsList);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchFruit(term);
    const filtered = fruitsList.filter((fruit) =>
      fruit.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFruits(filtered);
  };

  return (
    <div className="search-container">
      <h1>produce market</h1>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchFruit}
        onChange={handleSearch}
        className="search-input"
      />
      {filteredFruits.length === 0 && (
        <p>
          No fruits with letter "{searchFruit}" found. Please try searching for
          another fruit.
        </p>
      )}
      <ul className="fruits-list">
        {filteredFruits.map((fruit, index) => (
          <li key={index}>
            <span role="img" aria-label="fruit">
              {getFruitEmoji(fruit)}
            </span>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function getFruitEmoji(fruit) {
  switch (fruit.toLowerCase()) {
    case "banana":
      return "🍌";
    case "apple":
      return "🍎";
    case "orange":
      return "🍊";
    case "mango":
      return "🥭";
    case "pineapple":
      return "🍍";
    case "watermelon":
      return "🍉";
    default:
      return "🍇";
  }
}

export default SearchFilter;
