import styled from "@emotion/styled";
import HomeTitle from "../components/TitleText/HomeTitle";
import { useEffect, useState } from "react";
import MemberAPI from "../apis/MemberAPI";
import { useParams } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState({});
  const providerId = useParams().providerId;

  useEffect(() => {
    async function getUser(providerId) {
      const data = await MemberAPI.GET_USER_INFO({ providerId: providerId });
      setUserData(data);
    }
    getUser(Number(providerId));
  }, [providerId]);

  return (
    <Wrapper>
      <img src="/Icon/HomeLogo.svg"></img>
      <HomeTitle></HomeTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Home;
