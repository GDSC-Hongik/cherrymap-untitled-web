/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import { getDirections } from "../api/kakaoDirections";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Directions = () => {
  const location = useLocation();
  const { start, end, transportMode } = location.state || {};

  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (!start || !end) return;

    const fetchRoute = async () => {
      const result = await getDirections(start, end);
      setRoute(result);
    };

    fetchRoute();
  }, [start, end]);

  return (
    <Container>
      {start && end ? (
        <KakaoMap start={start} end={end} />
      ) : (
        <p>경로를 찾을 수 없습니다.</p>
      )}
    </Container>
  );
};

export default Directions;
