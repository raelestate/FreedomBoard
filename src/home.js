import { createButton } from "../components/button.js";
import { createNavbar } from "../components/navbar.js";
import { createMessage } from "../components/message.js";
import { createStickyNote } from "../components/stickynote.js";

const appRoot = document.getElementById("root");

const clickBtn = () => {
  window.location.href = "/freedomboard.html";
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
