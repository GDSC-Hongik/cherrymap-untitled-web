/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Bookmark from "./Bookmark";


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
  font-weight: 600;
`;

const Destination = styled.h2`
  position: absolute;
  top: 45px;
  left: 14px;
  color: #000000;
  font-size: 19px;
  font-weight: 600;
`;

const Duration = styled.span`
  position: absolute;
  top: 68px;
  left: 14px;
  font-size: 30px;
  font-weight: 500;
`;

const TimeInfo = styled.div`
  position: absolute;
  top: 108px;
  left: 14px;
  font-size: 16px;
  color: #5F5F5F;
`;

const DetailsContainer = styled.div`
  position: absolute;
  top: 141px;
  left: 14px;
  display: flex;
  gap: 9px;
`;

const PlaceholderBox = styled.div`
  flex: 1;
  width: 104px;
  height: 105px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const WalkingRouteCard = ({ destination, duration, arrivalTime, distance }) => {
  return (
    <CardContainer>
      <Bookmark />
      <Header>
        <Title>최적경로</Title>
      </Header>
      <Destination>{destination}</Destination>
      <Duration>{duration}</Duration>
      <TimeInfo>
        {arrivalTime} 도착 | {distance}
      </TimeInfo>
      <DetailsContainer>
        <PlaceholderBox />
        <PlaceholderBox />
        <PlaceholderBox />
      </DetailsContainer>
    </CardContainer>
  );
};

export default WalkingRouteCard;