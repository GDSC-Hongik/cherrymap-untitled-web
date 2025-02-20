import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage></OnboardingPage>}></Route>
      <Route path="/:providerId/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
