import { createButton } from "./button.js";
import { createTextArea } from "./createTextArea.js";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { db } from "./src/db/db.js";

const appRoot = document.getElementById("postboard");

const clickBtn = async () => {
  const text = document.querySelector("textarea").value;
  if (text.trim() !== "") {
    // Show loading modal
    const loadingModal = document.createElement("div");
    loadingModal.className = "modal";
    loadingModal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      `;
    document.body.appendChild(loadingModal);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        text: text,
        timestamp: serverTimestamp(),
        time: new Date().toLocaleString(),
      });
      console.log("Document written with ID: ", docRef.id);
      window.location.href = "freedomboard.html";
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      // Remove loading modal
      document.body.removeChild(loadingModal);
    }
  } else {
    alert("Please enter some text.");
  }
};

const button = createButton({
  onClick: clickBtn,
  children: "Post Note",
  className: "p-5",
}); // Add p-5 spacing to button
const textareaContainer = createTextArea();
appRoot.appendChild(textareaContainer);
appRoot.appendChild(button);
