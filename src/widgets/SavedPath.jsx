import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Setting from "../../public/Icon/Setting.svg";

const SavedPath = () => {
  const navigate = useNavigate();

  // path가 어떤 형식으로 들어올 지 정해져야 함.

  const handleClickSetting = () => {};

  return (
    <Wrapper onClick={navigate("/")}>
      <PathInfo>
        <PathTitle>
          <div className="title">{DUMMY_PATH.title}</div>
          <img src={Setting} onClick={handleClickSetting}></img>
        </PathTitle>
        <div className="info">

        </div>
      </PathInfo>
      {/** TransportationIcon */}
      {/** TransportationRoute */}
    </Wrapper>
  );
};

// API Response
const DUMMY_PATH = {
  title: "홍익대학교 서울캠퍼스",
  time: "28",
  distance: "1200",
  path: [],
};

// Wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 358px;

  border: 1px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;

  padding: 16px;
`;

// PathInfo

const PathInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
  margin-bottom: 6px;

  div.info {
    font-size: 17px;
    font-weight: 400;

    color: #868686;
  }
`;

// PathTitle
const PathTitle = styled.div`
  display: flex;
  justify-content: space-between;

  div.title {
    font-size: 22px;
    font-weight: 500;

    color: #000000;
  }
`;

export default SavedPath;
