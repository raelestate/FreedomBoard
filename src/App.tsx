import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreedomBoard from "./pages/FreedomBoard";
import PublicBoard from "./pages/PublicBoard";
import UserListPage from "./pages/UserListPage";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freedom-board" element={<FreedomBoard />} />
        <Route path="/public-board" element={<PublicBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/TTTTTTTTT" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
