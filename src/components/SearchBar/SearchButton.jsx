import styled from "@emotion/styled";

const Button = styled.button`
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

const SearchButton = ({ onClick }) => {
  return <Button onClick={onClick}>길찾기</Button>;
};

export default SearchButton;