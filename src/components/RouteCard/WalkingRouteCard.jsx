/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Bookmark from "./Bookmark";
import { mockWalkingRoute } from "../../mocks/mockWalkingRoute";

const WalkingRouteCard = () => {
  const { destination, duration, arrivalTime, distance } = mockWalkingRoute;

  return (
    <CardContainer>
      <Bookmark />
      <Header>
        <Title>최적경로</Title>
      </Header>
      <Destination>{destination}</Destination>
      <Duration>{duration}</Duration>
      <TimeInfoContainer>
        <TimeInfo>{arrivalTime} 도착</TimeInfo>
        <Divider />
        <TimeInfo>{distance}</TimeInfo>
      </TimeInfoContainer>
      <DetailsContainer>
      <PlaceholderContainer>
        {placeholders.map((_, index) => (
          <PlaceholderBox 
          key={index} 
          isFirst={index === 0} 
          isLast={index === placeholders.length - 1} 
          />
          ))}
          </PlaceholderContainer>
      </DetailsContainer>
    </CardContainer>
  );
};


const CardContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 0px 9.6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 358px;
  height: 272px;
  bottom: 3px;
  box-sizing: border-box;
`;

const Header = styled.div`
  position: absolute;
  top: 20px;
  left: 14px;
  display: flex; 
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.span`
  color: #ff2655;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const Destination = styled.span`
  position: absolute;
  top: 45px;
  left: 14px;
  color: #000000;
  font-size: 19px;
  font-weight: 500;
  line-height: 23px;
`;

const Duration = styled.span`
  position: absolute;
  top: 68px;
  left: 14px;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  margin: 0;
  color: #000000;
`;

const TimeInfoContainer = styled.div`
  position: absolute;
  top: 108px;
  left: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 19px;
`;

const TimeInfo = styled.div`
  font-size: 16px;
  color: #5F5F5F;
  font-weight: 400;
`;

const DetailsContainer = styled.div`
  position: absolute;
  top: 141px;
  left: 14px;
  display: flex;
  gap: 9px;
`;

const Divider = styled.div`
  width: 12px;
  height: 0px;

  border: 1px solid #757575;
  transform: rotate(90deg);
`;

const PlaceholderContainer = styled.div`
  display: flex;
  gap: 9px;
`;

const PlaceholderBox = styled.div`
  flex: 1;
  width: 104px;
  height: 105px;
  background: #d9d9d9;
  border-radius: ${({ isFirst, isLast }) => 
    isFirst ? "10px 0 0 10px" : 
    isLast ? "0 10px 10px 0" : 
    "0"};
`;

const placeholders = [1, 2, 3];

export default WalkingRouteCard;