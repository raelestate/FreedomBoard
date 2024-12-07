import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import StickyNote from "../components/StickyNote";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/firebase-config.tsx";
import Button from "../components/Button";
import Footer from "../components/Footer";
import * as reactRouterDom from "react-router-dom";

const getRandomWord = () => {
  const randomWords = [
    'Jenna Cole', 'Jack Collins', 'Nadia Cole', 'Theena Muran', 'Patio Toya', 'Molly Vogue', 'Nila Spaghetti', 'Benny R. Gyn', 'Beth Logins',  'Lilly Vogue', 'Christiano Bo', 'Ma. Kathy', 'Augustino Lagaspag', 'Sally Xi', 'Bethy Bartolome', 'Ernie Wan', 'Vina Ruruth', 'Kung Lee Li Gayaka', 'Sophie Ling','Ma. Ang Heet','Drink Water','Dia Rhea','Felon Knee','Auntie Sexy','Fillet Mignon','Dhrecxzeus','Sincerely Yours ‘98','Dzwyrgh','Hitler Manila','Ghrowizard','Yghngjhyll','Fort McKinley','Godis Withus','Rizalino','Danilo','Jejomar','Covid Bryant','Coviduvidapdap Dela Cruz'];
  
  
  return randomWords[Math.floor(Math.random() * randomWords.length)];
};

const formatTimestamp = (timestamp: any) => {
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
  const [user, setUser] = useState<any[]>([]);
  const navigate = reactRouterDom.useNavigate();

  const handleClick = () => {
    navigate("/freedom-board");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userCollection = collection(db, "users"); // Assuming the collection is named "users"
      const snapshot = await getDocs(userCollection);
      const userData: any[] = snapshot.docs.map((doc) => doc.data());
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <div id="note_area">
        <div className="container">
            <div className="note_area_holder">
              <div className="create_note">
                <Button children="Create Note" onClick={handleClick} />
              </div>
              <div className="note_flex">

                  {user.map((userData, index) => (
                      <StickyNote 
                        key={index}
                        heading={`Anonymous "${getRandomWord()}" Wrote:`} 
                        message={userData.text}
                        foot={formatTimestamp(userData.timestamp)} // Format timestamp
                      />
                      
                  ))}
                    </div>

            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicBoard;
