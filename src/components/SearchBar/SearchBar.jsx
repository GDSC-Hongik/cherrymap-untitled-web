/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import ClearButton from "./ClearButton";
import TransportToggle from "./TransportToggle";
import WalkingRouteCard from "./WalkingRouteCard";

const SearchBar = ({ onSearch }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [showToggle, setShowToggle] = useState(false);
  const [selectedTransport, setSelectedTransport] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    setStart("");
    setEnd("");
    setShowToggle(false);
    setSelectedTransport("");
    navigate(-1);
  };

  const handleSearch = () => {
    if (start && end) {
      setShowToggle(true);
    }
  };

  return (
    <Container showToggle={showToggle}>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="출발지를 입력해주세요"
          value={start}
          onChange={setStart}
          iconType="start"
          rightComponent={<ClearButton onClick={handleClose} />}
        />
        <Divider />
        <SearchInput
          type="text"
          placeholder="도착지를 입력해주세요"
          value={end}
          onChange={setEnd}
          iconType="destination"
          rightComponent={<SearchButton onClick={handleSearch} />}
        />
      </InputWrapper>
      {showToggle && (
        <TransportToggle
          selectedTransport={selectedTransport}
          onTransportChange={setSelectedTransport}
        />
      )}
      {selectedTransport === "walk" && <WalkingRouteCard />}
    </Container>
  );
};


const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  background: white;
  height: ${({ showToggle }) => (showToggle ? "159px" : "109px")};
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 9.6px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 15px 15px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: #F8F8F8;
  border-radius: 6px;
  height: 98px;
  width: 100%;
  max-width: 357px;
  padding: 3px 0;
  position: relative;
  box-sizing: border-box;
`;

const Divider = styled.div`
  position: relative;
  width: 241px;
  height: 0px;
  left: 39px;
  border: 1px solid #E4E4E4;
`;

export default SearchBar;