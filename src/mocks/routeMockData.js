export const mockRouteSteps = [
  { type: "start", title: "경남아너스빌아파트" },
  { type: "walk", title: "영등포시장역까지 걷기", description: "8분 | 460m 이동" },
  { 
    type: "subway", 
    line: "5호선", 
    title: "영등포시장역 승차", 
    description: "7분 | 4개 역 이동",
    exitStation: "마포역"
  },
  {
    type: "walk",
    title: "마포역 정류장까지 걷기",
    exit: "1번", 
    description: "2분  109m 이동"
  },
  { 
    type: "bus", 
    title: "마포역 정류장(100201) 승차", 
    line: "7013A",
    lineType: "지선",
    description: "12분 | 7개 정류장 이동",
    exitStation: "서강초등학교 정류장"
  },
  { type: "walk", title: "홍익대학교 서울캠퍼스까지 걷기", description: "7분 | 471m 이동" },
  { type: "destination", title: "홍익대학교 서울캠퍼스" }
];
