import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((val) => {
          return val.title.toLowerCase().includes(value);
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const goToSearchPage = () => {
    alert(input);
    setInput("");
  };

  //key event
  const KeyEvent = {
    Enter: () => {
      goToSearchPage();
    },
  };

  const handleKeyUp = (e) => {
    if (KeyEvent[e.key]) KeyEvent[e.key]();
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};
