/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 0px 9.6px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
  padding: 16px;
  width: 100%;
  height: 329px;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
`;

const Header = styled.div`
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
  color: #000000;
  font-size: 22px;
  font-weight: 600;
`;

const Duration = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

const TimeInfo = styled.div`
  font-size: 18px;
  color: #5F5F5F;
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const PlaceholderBox = styled.div`
  flex: 1;
  height: 60px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const HandleBar = styled.div`
  width: 40px;
  height: 4px;
  background: #ccc;
  border-radius: 2px;
  align-self: center;
  margin-bottom: 8px;
`;

const WalkingRouteCard = ({ destination, duration, arrivalTime, distance }) => {
  return (
    <CardContainer>
      <HandleBar />
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