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
          color: step.type === "bus" ? busColor : subwayLineColors[step.line] || "#ccc",
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

            {/* 🚍 버스 승차 시, 두 줄 구성 */}
            {step.type === "bus" ? (
              <BusDescription>
                <BusInfo>
                  <BusBadge>{step.lineType}</BusBadge> {step.line}
                </BusInfo>
                <span>{step.description}</span>
              </BusDescription>
            ) : (
              <WalkDescription>
                {/* 🚶‍♂️ 도보 출구 정보가 있으면 같은 줄에 배치 */}
                {step.exit && <ExitBadge>{step.exit} 출구</ExitBadge>}
                <span>{step.description}</span>
              </WalkDescription>
            )}
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
        <Right isLast={true}>
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
  position: absolute;
  flex-direction: column;
  position: relative;
  
  width: 308px;
  left: 60px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-bottom: ${({ isLast }) => (isLast ? "none" : "1px solid #e4e4e4")};
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

const ExitBadge = styled.span`
  background-color: #FFC831;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  padding: 2px 5px;
  border-radius: 3px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 19px;
`;

const WalkDescription = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: #4A4A4A;
`;

const BusDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: #4A4A4A;
`;

const BusInfo = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

const BusBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1CB10B;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  padding: 2px 5px;
  border-radius: 3px;
  width: 21px;
  margin-right: 4px;
  width: 31px;
  height: 19px;
`;


export default RightSection;