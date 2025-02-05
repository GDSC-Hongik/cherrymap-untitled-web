/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import styled from "@emotion/styled";

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
`;

const KakaoMap = ({ start, end }) => {
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(start.lat, start.lng),
      level: 4,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(start.lat, start.lng),
      map: map,
    });

    new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(end.lat, end.lng),
      map: map,
    });

  }, [start, end]);

  return <MapContainer id="map"></MapContainer>;
};

export default KakaoMap;
