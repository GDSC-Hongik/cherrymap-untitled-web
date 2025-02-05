import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";  // ✅ 파일명 수정
import Directions from "./pages/Directions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/directions" element={<Directions />} />
    </Routes>
  );
}

export default App;
