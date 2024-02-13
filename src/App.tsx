import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreedomBoard from "./pages/FreedomBoard";
import PublicBoard from "./pages/PublicBoard";
import UserListPage from "./pages/UserListPage";
import express from "express";
import path from "path";
const app = express();

// Middleware to set MIME type for JavaScript files
app.use((req: any, res: any, next: any): void => {
  if (req.url.endsWith(".js")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Define your routes and other middleware here...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FreedomBoard" element={<FreedomBoard />} />
        <Route path="/PublicBoard" element={<PublicBoard />} />
        <Route path="/Admin" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
