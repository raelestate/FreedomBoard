import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Message from "../components/Message";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../db/firebase-config";
import Footer from "../components/Footer";

function FreedomBoard() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // Calculate character count on every change
    setCharCount(text.length);
  }, [text]);

  const handleClick = async () => {
    // Add text and timestamp to Firestore if character count is below limit
    if (charCount <= 2000) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          text: text,
          timestamp: serverTimestamp(),
          time: new Date().toLocaleString(), // Current time
        });
        console.log("Document written with ID: ", docRef.id);
        // Navigate to PublicBoard
        navigate("/PublicBoard");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      // Handle character limit exceeded
      alert(
        "Character limit exceeded! Please reduce the text to 2000 characters or less."
      );
    }
  };

  const divStyle = {
    height: 400,
  };

  const handleChange = (e) => {
    const newText = e.target.value.slice(0, 2000); // Limit text to 2000 characters
    setText(newText);
  };

  const message = (
    <div className="container">
      <h6 className="display-6 text-center p-5 pt-5">What's on your mind?</h6>
      <p className="text-muted fs-5 text-start">
        Characters written: {charCount}/2000
      </p>
      <div className="form-floating">
        <textarea
          className={`form-control ${charCount >= 2000 ? "text-danger" : ""}`}
          placeholder="Express your thoughts here."
          style={divStyle}
          value={text}
          // Set maximum character length
          maxLength={2000}
          onChange={handleChange}
        ></textarea>
        <div className="pt-4">
          <Button children="Post to board" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <NavBar />
      <Message msg={message} />
      <Footer />
    </div>
  );
}

export default FreedomBoard;
