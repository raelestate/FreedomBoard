import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/freedom-board");
  };

  return (
    <div>
      <NavBar />
      <div id="slogan_area">
        <div className="container">
          <div className="slogan_video">
            <video src="./assets/video.mp4"></video>
          </div>
          <div className="slogan_info">
            <h2>
              Your Space, Your Voice, <span>No Names.</span>
            </h2>
            <p>An open platform to share your thoughts freely and anonymously.</p>
            <Button children="Get Started" onClick={handleClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
