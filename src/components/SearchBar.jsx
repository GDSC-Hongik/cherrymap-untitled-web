/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import CloseIcon from "../assets/icons/close.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  padding-top: calc(44px + env); /* iOS 상태바 여백 */
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  margin-left: 17px;
  max-width: 100%;
  box-shadow: 0px 0px 9.6px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 15px 15px;
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 356px;
  gap: 5px;
  margin-top: 5px;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: #F1F1F1;
  border: 1px solid #E6E6E6;
  border-radius: 6px;
  height: 41px;
  width: 310px;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
  padding-left: 15px;
  color: #818181;
  align-items: center;
`;

const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: px;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
  left: 333px;
`;

const SearchButton = styled.button`
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
  height: 41px;
`;

const SearchBar = ({ onSearch }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleClear = () => {
    setStart("");
    setEnd("");
  };

  return (
    <Container>
      <SearchRow>
        <InputWrapper>
          <Input 
            type="text" 
            placeholder="출발지를 입력해주세요" 
            value={start} 
            onChange={(e) => setStart(e.target.value)} 
          />
        </InputWrapper>
        <ClearButton visible={start.length > 0 || end.length > 0} onClick={handleClear}>
          <img src={CloseIcon} alt="Clear" />
        </ClearButton>
      </SearchRow>

      <SearchRow>
        <InputWrapper>
          <Input 
            type="text" 
            placeholder="도착지를 입력해주세요" 
            value={end} 
            onChange={(e) => setEnd(e.target.value)} 
          />
        </InputWrapper>

        <SearchButton onClick={() => onSearch(start, end)}>길찾기</SearchButton>
      </SearchRow>
    </Container>
  );
};

export default SearchBar;