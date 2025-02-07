/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [route, setRoute] = useState({ start: "", end: "", searched: false });

  const handleSearch = (start, end) => {
    setRoute({ start, end, searched: true });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {route.searched && <SearchResults start={route.start} end={route.end} />}
    </div>
  );
}

export default App;
