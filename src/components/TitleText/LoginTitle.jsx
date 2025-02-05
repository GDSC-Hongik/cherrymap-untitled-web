import styled from "@emotion/styled";

const LoginTitle = () => {
  return (
    <Wrapper>
      <div className="title">로그인을 해주세요!</div>
      <div className="subtitle">체리맵만의 서비스를 만나보실 수 있어요.</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div.title {
    font-size: 26px;
    font-weight: 500;

    color: #000000;
  }

  div.subtitle {
    font-size: 16px;
    font-weight: 400;

    color: #5c5c5c;
  }
`;

export default LoginTitle;
