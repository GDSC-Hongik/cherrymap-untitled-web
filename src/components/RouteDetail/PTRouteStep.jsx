/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const PTRouteStep = ({ step, index, totalSteps }) => {
  return (
    <StepWrapper>
      <LeftSection step={step} index={index} totalSteps={totalSteps} />
      <RightSection step={step} />
    </StepWrapper>
  );
};

/* 🎨 스타일 */
const StepWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 0;
`;

export default PTRouteStep;
