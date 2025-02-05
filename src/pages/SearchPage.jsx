import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecentSearch from "../components/RecentSearch";
import TransportToggle from "../components/TransportToggle";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SearchPage = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [mode, setMode] = useState("WALK");

  const handleSearch = (start, end) => {
    if (start && end) {
      setRecentSearches([...recentSearches, `${start} → ${end}`]);
    }
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <RecentSearch searches={recentSearches} onSelect={() => {}} />
      
    </Container>
  );
};

export default SearchPage;
