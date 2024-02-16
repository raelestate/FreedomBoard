import { db } from "../src/db/db.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

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

// const fetchUserData = async () => {
//   const db = getFirestore();
//   const usersRef = collection(db, "users");

//   try {
//     const querySnapshot = await getDocs(usersRef);
//     const userData = [];
//     querySnapshot.forEach((doc) => {
//       for (let i = userData; i < userData.length; i++) {
//         userData.fetchUserData(user.text);
//         // const div = document.createElement("div");
//         // div.className = "card bg-warning p-0 w-auto";

//         // const h2 = document.createElement("h2");
//         // h2.className = "card-title fs-6";
//         // h2.textContent = getRandomWord() + " wrote:";

//         // const p = document.createElement("p");
//         // p.className = "card-text";
//         // p.textContent = userData(user.text);
//       }
//       userData.push({
//         text: doc.data().text,
//         timestamp: doc.data().timestamp.toDate(),
//       });
//     });
//     console.log(userData);
//     return userData;
//   } catch (error) {
//     console.error("Error fetching user data: ", error);
//     return [];
//   }
// };
const createStickyNote = (text, timestamp) => {
  const marginContainer = document.createElement("div");
  marginContainer.className = "container";

  const cardCont = document.createElement("div");
  cardCont.className = "card w-auto bg-warning";

  const card = document.createElement("div");
  card.className = "card-body bg-warning p-3";

  const h2 = document.createElement("h2");
  h2.className = "card-title fs-6";
  h2.textContent = getRandomWord() + " wrote:";

  const p = document.createElement("p");
  p.className = "card-text text-start pt-3 fw-light";
  p.textContent = `${text}`;

  const h6 = document.createElement("h6");
  h6.className = "fs-6 fw-light text-start text-muted pt-3";
  h6.textContent = `Posted on ${timestamp}`;

  cardCont.appendChild(card);
  card.appendChild(h2);
  h2.appendChild(p);
  p.appendChild(h6);
  marginContainer.appendChild(cardCont);

  return marginContainer;
};

export { createStickyNote };
