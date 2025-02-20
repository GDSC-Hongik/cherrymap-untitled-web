/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import CircleBadge from "./CircleBadge";
import WalkIcon from "../../icons/walk-gray.svg";
import StartIcon from "../../icons/start.svg";
import DestinationIcon from "../../icons/destination.svg";

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

const LeftSection = ({ step }) => {
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
    <>
      {/* 출발지 */}
      {step.type === "start" && (
        <StepContainer>
          <Left>
            <StartEndIcon src={StartIcon} alt="출발지" />
          </Left>
        </StepContainer>
      )}

      {/* 일반 경로 (도보, 승차) */}
      {step.type !== "start" && step.type !== "destination" && step.type !== "stop" && (
  <StepContainer>
    <Left>
      {step.type === "walk" ? (
        <>
        {/* 점선 */}
          <DashedLine height="31px" />
          <WalkIconImg src={WalkIcon} alt="도보" />
          <DashedLine height="45px" />
        </>
      ) : (
        <>
          {/* 승차 배지 */}
          <CircleBadge
            type={step.type}
            label={step.type === "subway" ? step.line.replace("호선", "") : step.line}
            color={step.type === "subway" ? subwayLineColors[step.line] || "#ccc" : busColor}
          />

          {/* 승차 후 직선 (지하철/버스) */}
          {isBoarding && (
            <VerticalLine
            height={step.type === "bus" ? "75px" : "50px"}
            color={subwayLineColors[step.line] || busColor}
          />
          )}

          {/* 하차 배지 (승차일 때만 렌더링) */}
          {pairedStep && (
            <CircleBadge
              type="stop"
              label="하차"
              color={pairedStep.color}
            />
          )}
        </>
      )}
    </Left>
  </StepContainer>
)}


      {/* 도착지 */}
      {step.type === "destination" && (
        <StepContainer>
          <Left>
            <StartEndIcon src={DestinationIcon} alt="도착지" />
          </Left>
        </StepContainer>
      )}
    </>
  );
};


const StepContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
`;

const WalkIconImg = styled.img`
  width: 17px;
  margin-top: 3px;
  margin-bottom: 4px;
`;

const StartEndIcon = styled.img`
  width: 21px;
`;

const VerticalLine = styled.div`
  width: 3px;
  height: ${({ height }) => height || "50px"};
  background: ${({ color }) => color || "#d9d9d9"};
`;

const DashedLine = styled.div`
  width: 3px;
  height: ${({ height }) => height || "10px"};
  border-left: 2px dashed #d9d9d9;
  margin: 4px 0;
`;


export default LeftSection;