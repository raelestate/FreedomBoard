import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreedomBoard from "./pages/FreedomBoard";
import PublicBoard from "./pages/PublicBoard";
import UserListPage from "./pages/UserListPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FreedomBoard" element={<FreedomBoard />} />
        <Route path="/PublicBoard" element={<PublicBoard />} />
        <Route path="/TTTTTTTTT" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
