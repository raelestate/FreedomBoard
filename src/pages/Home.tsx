import React from "react";
import NavBar from "../components/NavBar";
import Message from "../components/Message";
import Button from "../components/Button";
import * as reactRouterDom from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = reactRouterDom.useNavigate();

  const handleClick = () => {
    navigate("/FreedomBoard");
  };
  const msg = (
    <>
      <div className="container pb-5">
        <h6 className="display-6 text-center">
          Welcome to <br></br>
          <b>FreedomBoard!</b>
          <br></br>
          <p className="display-6 pt-4" style={{ fontSize: 20 }}>
            <figcaption className="blockquote-footer">
              by{" "}
              <cite title="Source Title">
                <a href="https://github.com/raelestate" target="_blank">
                  RaelEstate
                </a>
              </cite>
            </figcaption>
          </p>
        </h6>
      </div>
      <div className="container">
        <h6 className="display-6 text-center">
          Where you can express anything <br></br>
          <b>Anonymously!</b>
        </h6>
      </div>
    </>
  );
  const newmsg = msg;
  return (
    <div>
      <NavBar />
      <Message msg={msg} />
      <Button children="Get Started" onClick={handleClick} />
      <Footer />
    </div>
  );
}
export default Home;
