/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const DottedLine = ({ count = 10 }) => {
  return (
    <LineContainer>
      {[...Array(count)].map((_, index) => (
        <Dot key={index} />
      ))}
    </LineContainer>
  );
};

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* 동그라미 간격 */
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: #a3a3a3;
  border-radius: 50%;
`;

export default DottedLine;
