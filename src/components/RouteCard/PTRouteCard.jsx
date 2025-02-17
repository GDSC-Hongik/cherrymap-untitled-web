/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Bookmark from "./Bookmark";
import WalkIconSrc from "../../icons/walk-gray.svg";

const CardContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 180px;
    width: 358px;
    height: 146px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 10px; 
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

const Duration = styled.span`
  position: absolute;
  top: 68px;
  left: 14px;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 79px;
  left: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 19px;
`;

const Info = styled.div`
  font-size: 16px;
  color: #5F5F5F;
  font-weight: 400;
`;

const Divider = styled.div`
  width: 14px;
  height: 0px;

  border: 1px solid #CCCCCC;
  transform: rotate(90deg);
`;

const RouteBarContainer = styled.div`
  position: absolute;
  align-items: center;
  top: 113px;
  left: 14px;
  display: flex;
  width: 330px;
  height: 16px;
  background: #EEEEEE;
  border: 1px solid #D4D4D4;
  border-radius: 30px;
`;

const WalkIconStyled = styled.img`
  position: absolute;
  left: 6px;
  height: 12px;
  width: 9px;
`;

const PTRouteCard = ({ duration, arrivalTime, walkTime, fare }) => {
  return (
    <CardContainer>
      <Bookmark />
      <Header>
        <Title>최적경로</Title>
      </Header>
      <Duration>{duration}</Duration>
      <InfoContainer>
        <Info>{arrivalTime} 도착</Info>
        <Divider />
        <Info>도보 {walkTime}</Info>
        <Divider />
        <Info>{fare}</Info>
      </InfoContainer>
      <RouteBarContainer>
      <WalkIconStyled src={WalkIconSrc} alt="도보" />
      </RouteBarContainer>
    </CardContainer>
  );
};

export default PTRouteCard;