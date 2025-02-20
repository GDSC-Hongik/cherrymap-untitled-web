import styled from "@emotion/styled";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const OnboardingPage = () => {
  return (
    <Wrapper>
      <Swiper
        // allowSlidePrev={false}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        watchSlidesProgress={true}
      >
        <SwiperSlide className="onboarding first">
          <img src="/Onboarding/OnboardingText1.svg" width={"207px"}></img>

          <img src="/Onboarding/1.svg" width={"355px"}></img>
        </SwiperSlide>
        <SwiperSlide className="onboarding second">
          <img src="/Onboarding/OnboardingText2.svg" width={"199px"}></img>

          <img src="/Onboarding/2.svg" width={"337px"}></img>
        </SwiperSlide>
        <SwiperSlide className="login">
          <img src="/Icon/Logo.svg" width={"109px"}></img>
          <div className="login-text">간편 로그인으로 3초만에 시작하기</div>
          <div className="login-social">
            <a href="http://ec2-3-38-212-108.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao">
              <img src="/Login/Login1.svg"></img>
            </a>
            <img src="/Login/Login2.svg"></img>
            <img src="/Login/Login3.svg"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  display: flex;

  box-sizing: border-box;
  padding-top: 164px;

  .onboarding {
    display: flex;
    flex-direction: column;
    gap: 102px;
  }

  .login {
    margin-top: 79px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-text {
      margin-top: 104px;
      margin-bottom: 19px;

      font-size: 15px;
      color: #989898;
    }

    .login-social {
      display: flex;
      gap: 24px;
    }
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .swiper-pagination-bullet {
    position: relative;
    width: 12px;
    height: 12px;
    background-color: gray;
    border-radius: 50%;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: red;
  }

  .swiper-pagination-bullet::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .swiper-pagination-bullet:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: gray;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }

  .swiper-pagination-bullet-active:not(:last-child)::after {
    background-color: red;
  }
`;

export default OnboardingPage;
