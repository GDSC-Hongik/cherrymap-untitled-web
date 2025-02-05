import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();

  const handleSearchEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
    console.log(event);
  };

  const handleSearch = (event) => {
    navigate(`/search?word=${event.target.value}`);
    console.log(event);
  };

  return (
    <Wrapper>
      <img className="search-icon"></img>
      <input
        className="search-word"
        key={"search-word"}
        placeholder={"새로운 경로를 추가해보세요."}
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
        onKeyUp={(event) => handleSearchEnter(event)}
      ></input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 9px;

  width: 358px;
  height: 49px;

  border: 2px solid #ff2655;
  border-radius: 30px;
  box-sizing: border-box;

  padding-left: 18px;

  img.search-icon {
    width: 21px;
    height: 21px;
  }

  input.search-word {
    // 디자인 삭제
    border: none;
    background-color: transparent;

    font-size: 16px;
    font-weight: 400;
    color: #818181;
  }
`;

export default SearchBox;
