import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import StickyNote from "../components/StickyNote";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/firebase-config.tsx";
import { DocumentData } from "firebase/firestore";
import Button from "../components/Button";
import Footer from "../components/Footer";
import * as reactRouterDom from "react-router-dom";
const getRandomWord = () => {
  const randomWords = [
    'Liam Parker', 'Emma Johnson', 'Noah Davis', 'Olivia Brown', 'James Wilson',
    'Isabella Garcia', 'Benjamin Lee', 'Sophia Martinez', 'Lucas Anderson', 'Ava Hernandez',
    'Henry Miller', 'Mia Robinson', 'Alexander Clark', 'Amelia Lewis', 'Ethan Walker',
    'Charlotte Young', 'William Hall', 'Evelyn King', 'Sebastian Wright', 'Harper Scott',
    'Mason Adams', 'Aria Carter', 'Logan Nelson', 'Grace Mitchell', 'Jacob Moore',
    'Scarlett Perez', 'Michael White', 'Chloe Turner', 'Elijah Taylor', 'Ella Rivera',
    'Daniel Harris', 'Victoria Gonzalez', 'Jackson Flores', 'Luna Baker', 'Aiden Reed',
    'Camila Adams', 'Matthew Collins', 'Zoe Stewart', 'David Morris', 'Penelope Rogers',
    'Samuel Hughes', 'Layla Cook', 'Joseph Phillips', 'Riley Peterson', 'John Ward',
    'Lily Cooper', 'Andrew Ross', 'Aurora Bailey', 'Gabriel Sanders', 'Ellie Powell',
    'Joshua Price', 'Nora Howard', 'Christopher Butler', 'Hazel Cox', 'Ryan Bennett',
    'Madison Foster', 'Luke Richardson', 'Stella Simmons', 'Jack Henderson', 'Violet Long',
    'Anthony Perry', 'Savannah Hughes', 'Dylan Coleman', 'Sophie Brooks', 'Julian Butler',
    'Paisley Watson', 'Adam Jenkins', 'Elliana Griffin', 'Leo Fisher', 'Aaliyah Bryant',
    'Owen Graham', 'Elena Murphy', 'Nathan Torres', 'Lydia Harper', 'Wyatt Rivera',
    'Addison Bell', 'Aaron Ramirez', 'Audrey Griffin', 'Caleb Martin', 'Maya Scott',
    'Isaac Kelly', 'Brooklyn Morales', 'Miles Cooper', 'Genesis Henderson', 'Nicholas Hayes',
    'Hannah Stewart', 'Hunter Diaz', 'Emilia Simmons', 'Connor Lewis', 'Autumn Torres',
    'Carter Nelson', 'Kennedy Gonzales', 'Charles Barnes', 'Lucy Powell', 'Eli Wood',
    'Samantha Reyes', 'Robert Clark', 'Ruby Patterson', 'Thomas Ward', 'Paisley Bailey'
  ];
  
  return randomWords[Math.floor(Math.random() * randomWords.length)];
};

// Function to format timestamp
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
  const [user, setUser] = useState<DocumentData[]>([]);
  const navigate = reactRouterDom.useNavigate();

  const handleClick = () => {
    navigate("/FreedomBoard");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userCollection = collection(db, "users"); // Assuming the collection is named "users"
      const snapshot = await getDocs(userCollection);
      const userData: DocumentData[] = snapshot.docs.map((doc) => doc.data());
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <Button children="Create Note" onClick={handleClick} />
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
                foot={formatTimestamp(userData.timestamp)} // Format timestamp
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
