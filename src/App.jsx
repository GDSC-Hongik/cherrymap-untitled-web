import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar"; // 🚀 SearchBar import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
