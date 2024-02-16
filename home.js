import { createButton } from "./button.js";
import { createNavbar } from "./navbar.js";
import { createMessage } from "./message.js";
import { createFooter } from "./footer.js";

const appRoot = document.getElementById("root");

const clickBtn = () => {
  // Create modal backdrop with transparency
  const modalBackdrop = document.createElement("div");
  modalBackdrop.className = "modal-backdrop fade show";
  modalBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Black with 50% opacity
  document.body.appendChild(modalBackdrop);

  // Create modal
  const modal = document.createElement("div");
  modal.className = "modal fade show";
  modal.style.display = "block";
  modal.setAttribute("aria-modal", "true");

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog modal-dialog-centered";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body text-center";

  // Show loading spinner
  const loadingSpinner = document.createElement("div");
  loadingSpinner.className = "spinner-border text-primary";
  loadingSpinner.setAttribute("role", "status");

  const loadingText = document.createElement("span");
  loadingText.className = "visually-hidden";
  loadingText.textContent = "Loading...";

  loadingSpinner.appendChild(loadingText);
  modalBody.appendChild(loadingSpinner);
  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  // Append modal to the document body
  document.body.appendChild(modal);

  // Simulate loading delay (remove this in production)
  setTimeout(() => {
    window.location.href = "freedomboard.html";
  }, 2000); // Replace 2000 with your actual loading time
};

const welcomeMessage = `
  <div class="container pb-5">
    <h6 class="display-6 text-center">
      Welcome to <br>
      <b>FreedomBoard!
      <br>
      <span class="display-6 pt-4" style="font-size: 20px;">
        <span class="blockquote-footer">
          by <cite title="Source Title">
            <a href="https://github.com/raelestate" target="_blank">RaelEstate</a>
          </cite>
        </span>
      </span>
    </h6>
  </div>
  <div class="container">
    <h6 class="display-6 text-center">
      Where you can express anything <br>
      <b>Anonymously!</b>
    </h6>
  </div>
`;

const messageElement = createMessage(welcomeMessage);

const div = document.createElement("div");

// const stick = createStickyNote({ heading: { welcomeMessage } });

const nav = createNavbar();
const button = createButton({ onClick: clickBtn, children: "Let's Proceed" });

appRoot.appendChild(nav);
appRoot.appendChild(messageElement);
appRoot.appendChild(button);

const foot = createFooter();
appRoot.appendChild(foot);
