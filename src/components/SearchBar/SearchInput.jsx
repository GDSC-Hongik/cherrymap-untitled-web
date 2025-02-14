import styled from "@emotion/styled";
import StartIcon from "../../icons/start.svg";
import DestinationIcon from "../../icons/destination.svg";

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

const SearchInput = ({ type, placeholder, value, onChange, iconType, rightComponent }) => {
  return (
    <SearchRow>
      <Icon src={iconType === "start" ? StartIcon : DestinationIcon} alt={iconType} />
      <Input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      {rightComponent}
    </SearchRow>
  );
};

export default SearchInput;