import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../db/firebase-config";
import Footer from "../components/Footer";
import Button from "../components/Button";

function FreedomBoard() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleClick = async () => {
    if (charCount <= 300) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          text: text,
          timestamp: serverTimestamp(),
          time: new Date().toLocaleString(),
        });
        console.log("Document written with ID: ", docRef.id);
        navigate("/public-board");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert(
        "Character limit exceeded! Please reduce the text to 300 characters or less."
      );
    }
  };

  const handleChange = (e: any) => {
    const newText = e.target.value.slice(0, 300);
    setText(newText);
  };

  const message = (
        <div id="form_area">
        <div className="container">
            <div className="form_holder">
                <div className="form_info">
                    <h2>What's on your mind?</h2>
                    <p>Characters written: {charCount}/300</p>
                </div>
                <div className="form_floating">
                    <textarea className={`form-control ${charCount >= 300 ? "text-danger" : ""}`} placeholder="Express your thoughts here." value={text} maxLength={300} onChange={handleChange}></textarea>
                    <Button onClick={handleClick}>Post to board</Button>
                </div>
            </div>
        </div>
    </div>
    
  );
  return (
    <div>
      <NavBar />
       {message}
       <Footer />
    </div>
  );
}

export default FreedomBoard;
