/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  width: 100%;
  max-width: 400px; /* 🔥 최대 크기 제한 */
  margin: 0 auto;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#ff2655" : "#f5f5f5")}; /* 🔥 선택된 버튼 색상 변경 */
  color: ${(props) => (props.active ? "white" : "#333")};
  text-align: center;
`;

const TransportToggle = ({ mode, setMode }) => {
  return (
    <ToggleContainer>
      <Button active={mode === "WALK"} onClick={() => setMode("WALK")}>
        도보 
      </Button>
      <Button active={mode === "TRANSIT"} onClick={() => setMode("TRANSIT")}>
        대중교통 🚍
      </Button>
    </ToggleContainer>
  );
};

export default TransportToggle;
