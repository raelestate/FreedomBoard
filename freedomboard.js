import { createNavbar } from "./navbar.js";
import { createStickyNote } from "./stickynote.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { db } from "./src/db/db.js";
import { createFooter } from "./footer.js";
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

const appRoot = document.getElementById("app");

const fetchUserData = async () => {
  const db = getFirestore();
  const usersRef = collection(db, "users");

  try {
    const querySnapshot = await getDocs(usersRef);
    const userData = [];
    querySnapshot.forEach((doc) => {
      userData.push({
        text: doc.data().text,
        timestamp: doc.data().timestamp.toDate(),
      });
    });
    console.log(userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return [];
  }
};

const renderPage = async () => {
  const userData = await fetchUserData();

  const container = document.createElement("div");
  container.className = "container";

  const row = document.createElement("div");
  row.className = "row";

  let userCountText = "";
  if (userData.length === 0) {
    userCountText = "You're the first one here.";
  } else if (userData.length === 1) {
    userCountText = "Only 1 note posted, please populate this board <3.";
  } else {
    userCountText = `There are ${userData.length} notes that are posted.`;
  }

  const userCountTextElement = document.createElement("p");
  userCountTextElement.className = "fs-5";
  userCountTextElement.textContent = userCountText;
  container.appendChild(userCountTextElement);

  const postButton = document.createElement("button");
  postButton.textContent = "Post a note";
  postButton.className = "btn btn-warning mt-1";
  postButton.addEventListener("click", () => {
    window.location.href = "postboard.html";
  });
  container.appendChild(postButton);
  container.appendChild(row); // Append the row to the container

  userData.forEach((user) => {
    const stickyNote = createStickyNote(user.text, user.timestamp);
    const col = document.createElement("div");
    col.className = "col p-2";
    col.appendChild(stickyNote);
    row.appendChild(col); // Append the col to the row
  });

  appRoot.appendChild(container);
  const foot = createFooter();
  appRoot.appendChild(foot); // Append the container to the appRoot
};

const nav = createNavbar();
appRoot.appendChild(nav);

renderPage();
