import styled from "@emotion/styled";
import CloseIcon from "../../icons/close.svg";

const Button = styled.button`
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

const ClearButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={CloseIcon} alt="Clear" />
    </Button>
  );
};

export default ClearButton;