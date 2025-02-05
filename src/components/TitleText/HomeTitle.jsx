import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeTitle = () => {
  // props로 name을 받아와서 이름을 보여줘야 함.

  return (
    <Wrapper>
      <div className="title">안녕하세요 {}님!</div>
      <div className="title">오늘도 함께 가볼까요?</div>
    </Wrapper>
  );
};

HomeTitle.defaultProps = {
  name: "익명",
};

// missing in props validation 오류를 해결하기 위해 추가함.
HomeTitle.propsTypes = {
  name: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  div.title {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;

    color: #000000;
  }
`;

export default HomeTitle;
