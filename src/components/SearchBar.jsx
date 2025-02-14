/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../icons/close.svg";
import StartIcon from "../icons/start.svg";
import DestinationIcon from "../icons/destination.svg";
import TransportToggle from "./TransportToggle";

const Container = styled.div`
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

const SearchRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Icon = styled.img`
  width: 12px;
  margin-left: 14px;
  margin-right: 13px;
`;

const Input = styled.input`
  flex: 1;
  width: 241px;
  max-width: 100%;
  border: none;
  background: transparent;
  font-size: 17px;
  outline: none;
  color: #A5A5A5;
  align-items: center;
  color: ${({ hasText }) => (hasText ? "#A5A5A5" : "#000000")};
`;

const ClearButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
  color: #666666;
  width: 41px;
  height: 41px;
  right: 13px;
`;

const SearchButton = styled.button`
  position: relative;
  padding: 2px;
  background: #ff2655;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 41px;
  height: 38px;
  right: 13px;
  box-sizing: border-box;
`;

const Divider = styled.div`
  position: relative;
  width: 241px;
  height: 0px;
  left: 39px;
  border: 1px solid #E4E4E4;
`;

const SearchBar = ({ onSearch }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [showToggle, setShowToggle] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setStart("");
    setEnd("");
    setShowToggle(false);
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
        <SearchRow>
          <Icon src={StartIcon} alt="출발지" />
          <Input
            type="text" 
            placeholder="출발지를 입력해주세요" 
            value={start} 
           onChange={(e) => setStart(e.target.value)}
           />
          <ClearButton visible={start.length > 0 || end.length > 0} onClick={handleClose}>
          <img src={CloseIcon} alt="Clear" />
          </ClearButton>
        </SearchRow>
        
        <Divider />
        
        <SearchRow>
          <Icon src={DestinationIcon} alt="도착지" />
          <Input 
            type="text" 
            placeholder="도착지를 입력해주세요" 
            value={end} 
            onChange={(e) => setEnd(e.target.value)} 
          />
          <SearchButton onClick={handleSearch}>길찾기</SearchButton>
          </SearchRow>
          
      </InputWrapper>


      {showToggle && <TransportToggle />}
    </Container>
  );
};

export default SearchBar;