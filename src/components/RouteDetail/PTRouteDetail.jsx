/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import PTRouteStep from "./PTRouteStep";

const PTRouteDetail = ({ steps }) => {
  return (
    <Container>
      {steps.map((step, index) => (
  <PTRouteStep key={index} step={step} index={index} totalSteps={steps.length} />
))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 326px;
  width: 390px;
  height: calc(100vh - 326px); /* 🔥 화면에서 SearchBar, PTRouteCard를 제외한 나머지 높이 */
  overflow-y: auto;
  background: white;
  padding: 10px 0;
  box-sizing: border-box;
`;


export default PTRouteDetail;