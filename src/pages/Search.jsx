/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import SearchBar from "../components/SearchBar/SearchBar";
import PTRouteDetail from "../components/RouteDetail/PTRouteDetail";
import { mockRouteSteps } from "../mocks/routeMockData";

const Search = () => {
  const [selectedTransport, setSelectedTransport] = useState("");

  return (
    <Container>
      <SearchBar onTransportChange={setSelectedTransport} />
      {selectedTransport === "bus" && <PTRouteDetail steps={mockRouteSteps} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden; 
`;


export default Search;