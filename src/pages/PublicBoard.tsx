import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import StickyNote from "../components/StickyNote";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "../db/firebase-config.tsx";
import Button from "../components/Button";
import Footer from "../components/Footer";
import * as reactRouterDom from "react-router-dom";

const TWO_WEEKS_IN_MS = 14 * 24 * 60 * 60 * 1000;

const getRandomWord = () => {
  const randomWords = [
    'Jenna Cole', 'Jack Collins', 'Nadia Cole', 'Theena Muran', 'Patio Toya', 'Molly Vogue', 'Nila Spaghetti', 
    'Benny R. Gyn', 'Beth Logins', 'Lilly Vogue', 'Christiano Bo', 'Ma. Kathy', 'Augustino Lagaspag', 
    'Sally Xi', 'Bethy Bartolome', 'Ernie Wan', 'Vina Ruruth', 'Kung Lee Li Gayaka', 'Sophie Ling',
    'Ma. Ang Heet', 'Drink Water', 'Dia Rhea', 'Felon Knee', 'Auntie Sexy', 'Fillet Mignon', 'Dhrecxzeus',
    'Sincerely Yours ‘98', 'Dzwyrgh', 'Hitler Manila', 'Ghrowizard', 'Yghngjhyll', 'Fort McKinley',
    'Godis Withus', 'Rizalino', 'Danilo', 'Jejomar', 'Covid Bryant', 'Coviduvidapdap Dela Cruz'
  ];
  return randomWords[Math.floor(Math.random() * randomWords.length)];
};

const formatTimestamp = (timestamp: any) => {
  const date = timestamp.toDate();
  const now = new Date();
  const diff = Math.round((now.getTime() - date.getTime()) / 60000);

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

const getExpirationText = (timestamp: any) => {
  const expirationDate = new Date(timestamp.toDate().getTime() + TWO_WEEKS_IN_MS);
  return `This note will expire on ${expirationDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
};

const PublicBoard = () => {
  const [user, setUser] = useState<any[]>([]);
  const navigate = reactRouterDom.useNavigate();

  const handleClick = () => {
    navigate("/freedom-board");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userCollection = collection(db, "users");
      const snapshot = await getDocs(userCollection);
      
      const now = new Date();

      // Filter notes that are within the 2-week period
      const userData: any[] = [];
      for (const docSnap of snapshot.docs) {
        const data = docSnap.data();
        const timestamp = data.timestamp.toDate();
        
        if (now.getTime() - timestamp.getTime() < TWO_WEEKS_IN_MS) {
          userData.push({ ...data, id: docSnap.id });
        } else {
          // Delete expired notes from Firestore
          await deleteDoc(doc(db, "users", docSnap.id));
        }
      }

      // Sort by timestamp (earliest to latest)
      userData.sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate());

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
              <Button onClick={handleClick}>Create Note</Button>
            </div>
            <div className="note_flex">
              {user.length === 0 ? (
                <p className="no-notes-message">
                  You're the only one here, let's put some notes, shall we?
                </p>
              ) : (
                user.map((userData, index) => (
                  <StickyNote 
                    key={index}
                    heading={`Anonymous "${getRandomWord()}" Wrote:`} 
                    message={userData.text}
                    foot={`${formatTimestamp(userData.timestamp)} — ${getExpirationText(userData.timestamp)}`}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicBoard;
