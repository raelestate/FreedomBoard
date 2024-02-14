import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import StickyNote from "../components/StickyNote";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/firebase-config";
import Button from "../components/Button";
import Footer from "../components/Footer";
import * as reactRouterDom from "react-router-dom";
const getRandomWord = () => {
  const randomWords = [
    "slay",
    "patweetums",
    "suplado/suplada moves",
    "pogi/maganda",
    "charot",
    "ghosting pa more",
    "popoy/popoygutom",
    "kilig",
    "pogi/maganda points",
    "woke",
    "pahabol",
    "taray",
    "patweetums overload",
    "walang problema",
    "adulting",
    "real talk",
    "busit",
    "humble",
    "jologs",
    "pogi/maganda problems",
    "pogi points/maganda points",
    "bet na bet",
    "awra",
    "suplado/suplada",
    "flex ng flex",
    "sana all",
    "patay",
    "bestie",
    "pabebe drama",
    "ASAWW",
    "pogi/maganda problems",
    "jombag",
    "char lang naman",
    "hugot",
    "pabebe",
    "char",
    "positive adjectives",
    "lowkey",
    "hype na hype",
    "ingat",
    "flex",
    "fangirl/fangboy",
    "popoy/popoygutom",
    "woke AF",
    "pogi/maganda",
    "highkey",
    "suporta",
    "exes baggage pa more",
    "kilig na kilig",
    "pogi/maganda",
    "lowkey",
    "hype",
    "slay queen/king",
    "patay",
    "fangirl/fangboy goals",
    "goals na goals",
    "charot",
    "shookt",
    "pogi/maganda",
    "besties for life!",
    "walang pake talaga",
    "goals na goals talaga",
    "busit na busit",
    "woke points",
    "real talk",
    "savage",
    "berde",
    "popoy/popoygutom",
    "flex na flex",
    "char lang naman",
    "pabebe drama overload",
    "lowkey",
    "humble pa more",
    "awra mo sis/bro",
    "pogi/maganda",
    "walang ganun",
    "hugot",
    "suplado/suplada moves",
    "shookt na shookt",
    "sus",
    "walang pake",
    "pogi/maganda",
    "adulting",
    "jologs",
    "humble",
    "suplado/suplada",
    "char",
    "taray",
    "char lang naman",
    "hype na hype",
    "bestie",
    "pogi/maganda",
    "pahabol",
    "jombag",
    "pogi/maganda points",
    "real talk",
    "suplado/suplada moves",
    "pogi/maganda",
    "charot",
    "pogi/maganda points",
    "pogi/maganda problems",
    "char lang naman",
    "pabebe",
    "ingat",
    "patweetums",
    "adulting",
    "woke",
    "hugot",
    "patweetums overload",
    "busit",
    "humble",
    "hype",
    "slay",
    "popoy/popoygutom",
    "patweetums",
    "sana all",
    "humble",
    "ghosting pa more",
    "berde",
    "patay",
    "hugot",
    "real talk",
    "ASAWW",
    "suplado/suplada",
    "char",
    "lowkey",
    "highkey",
    "flex",
    "pogi/maganda",
    "hype",
    "busit",
    "pogi/maganda",
    "pabebe drama",
    "real talk",
    "charot",
    "ingat",
    "taray",
    "pogi/maganda",
    "patweetums overload",
    "exes baggage pa more",
    "flex na flex",
    "savage",
    "pogi/maganda",
    "popoy/popoygutom",
    "pogi/maganda",
    "ghosting pa more",
    "besties for life!",
    "char",
    "patweetums",
    "charot",
    "hugot",
    "shookt",
    "suplado/suplada moves",
    "real talk",
    "sana all",
    "patweetums overload",
    "woke",
    "suplado/suplada",
    "patweetums",
    "pogi/maganda points",
    "pogi/maganda problems",
    "real talk",
    "pogi/maganda",
    "char lang naman",
    "pogi/maganda points",
    "humble pa more",
    "goals na goals",
    "patweetums",
    "patweetums overload",
    "flex na flex",
    "suplado/suplada moves",
    "positive adjectives",
    "busit",
    "woke AF",
    "char lang naman",
    "real talk",
    "adulting",
    "pahabol",
    "bet na bet",
    "char lang naman",
  ];
  return randomWords[Math.floor(Math.random() * randomWords.length)];
};

// Function to format timestamp
const formatTimestamp = (timestamp) => {
  const date = timestamp.toDate();
  const now = new Date();
  const diff = Math.round((now.getTime() - date.getTime()) / 60000); // Difference in minutes

  if (diff < 1) {
    return "just now";
  } else if (diff === 1) {
    return "1 min ago";
  } else if (diff < 60) {
    return `${diff} mins ago`;
  } else {
    const options = { month: "short", day: "numeric" };
    return `posted on ${date.toLocaleDateString("en-US", options)}`;
  }
};

const PublicBoard = () => {
  const [user, setUser] = useState([]);
  const navigate = reactRouterDom.useNavigate();

  const handleClick = () => {
    navigate("/FreedomBoard");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userCollection = collection(db, "users"); // Assuming the collection is named "users"
      const snapshot = await getDocs(userCollection);
      const userData = snapshot.docs.map((doc) => doc.data());
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <Button children="Create Another Note" onClick={handleClick} />
      <div className="container justify-content-around">
        <div className="row">
          {user.map((userData, index) => (
            <div className="col-auto" key={index}>
              <StickyNote
                heading={
                  <div className="fs-6">
                    Anonymous "{getRandomWord()}" Wrote:
                  </div>
                }
                message={<div className="fs-6">{userData.text}</div>}
                // Format timestamp
                foot={formatTimestamp(userData.timestamp)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicBoard;
