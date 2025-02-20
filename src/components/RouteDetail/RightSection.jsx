/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const subwayLineColors = {
  "1호선": "#0032A0",
  "2호선": "#00B140",
  "3호선": "#FC4C02",
  "4호선": "#00A9E0",
  "5호선": "#A05EB5",
  "6호선": "#A9431E",
  "7호선": "#67823A",
  "8호선": "#E31C79",
  "9호선": "#8C8279",
};

const busColor = "#373E51";

const RightSection = ({ step }) => {
  const isBoarding = step.type === "subway" || step.type === "bus";

  // **승차 시 하차 자동 생성 (하차역 포함)**
  const pairedStep =
    isBoarding && step.exitStation
      ? {
          type: "stop",
          title: `${step.exitStation} 하차`,
          line: step.line,
          color: step.type === "bus" ? busColor : subwayLineColors[step.line] || "#ccc", // 🚀 하차 색상 유지
        }
      : null;

  return (
    <StepContainer>
      {/* 출발지 */}
      {step.type === "start" && (
          <Right>
            <TextContainer>
              <Title>{step.title}</Title>
            </TextContainer>
          </Right>
      )}

      {/* 일반 경로 (도보, 승차) */}
      {step.type !== "start" && step.type !== "destination" && step.type !== "stop" && (
          <Right>
            <TextContainer>
              <Title>{step.title}</Title>
              <Description>{step.description}</Description>
            </TextContainer>
          </Right>
      )}

      {/* 하차 단계 (지하철/버스 동일한 색상 유지) */}
      {pairedStep && (
          <Right>
            <TextContainer>
              <Title>{pairedStep.title}</Title>
            </TextContainer>
          </Right>
      )}

      {/* 도착지 */}
      {step.type === "destination" && (
          <Right>
            <TextContainer>
              <Title>{step.title}</Title>
            </TextContainer>
          </Right>
      )}
    </StepContainer>
  );
};


const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 308px;
  right: 17px;
  border-bottom: 1px solid #e4e4e4;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #000;
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: #4A4A4A;
`;

export default RightSection;