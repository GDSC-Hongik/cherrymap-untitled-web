/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import BusIcon from "../../icons/bus-icon.svg";

// 🚇 지하철 노선 색상 매핑
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

// 🚌 버스 색상
const busColor = "#373E51";

const CircleBadge = ({ type, label, line, color }) => {
  const isSubway = type === "subway";
  const isBus = type === "bus";
  const isStop = type === "stop";

  // 🚀 **색상 적용 수정**
  const badgeColor = color || (isBus ? busColor : subwayLineColors[line] || "#ccc");

  return (
    <Badge color={badgeColor} isSubway={isSubway} isStop={isStop}>
      {isBus ? (
        <BusIconStyled src={BusIcon} alt="bus" />
      ) : (
        <Label isSubway={isSubway} isStop={isStop}>
          {isSubway ? label.replace("호선", "") : label} {/* ✅ 지하철은 숫자만 표시 */}
        </Label>
      )}
    </Badge>
  );
};

// 🔹 뱃지 스타일
const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

// 🔹 텍스트 스타일 (폰트 크기 조절)
const Label = styled.span`
  font-size: ${({ isSubway, isStop }) => (isSubway ? "19px" : isStop ? "15px" : "15px")};
  font-weight: 500;
  color: white;
`;

// 🔹 버스 아이콘 크기 조절
const BusIconStyled = styled.img`
  width: 20px;
  height: 20px;
`;

export default CircleBadge;
