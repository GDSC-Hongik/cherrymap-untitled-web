import axios from "axios";

const KAKAO_REST_API_KEY = "YOUR_KAKAO_REST_API_KEY";

export const getDirections = async (start, end) => {
  const url = `https://apis-navi.kakaomobility.com/v1/directions`;
  
  const response = await axios.post(url, {
    origin: `${start.lng},${start.lat}`,
    destination: `${end.lng},${end.lat}`,
    priority: "FASTEST",
  }, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
