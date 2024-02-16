// createTextArea.js
function createTextArea() {
  const container = document.createElement("div");
  container.className = "container p-5"; // Add p-5 spacing

  const heading = document.createElement("h6");
  heading.className = "display-6 text-center pt-5"; // Add pt-5 spacing
  heading.textContent = "What's on your mind?";
  container.appendChild(heading);

  const charCountParagraph = document.createElement("p");
  charCountParagraph.className = "text-muted fs-5 text-start";
  charCountParagraph.textContent = "Characters written: 0/600";
  container.appendChild(charCountParagraph);

  const textArea = document.createElement("textarea");
  textArea.className = "form-control";
  textArea.placeholder = "Express your thoughts here.";
  textArea.style.minHeight = "200px";
  textArea.style.maxHeight = "400px";
  textArea.style.resize = "none";
  textArea.maxLength = 600;
  textArea.addEventListener("input", function () {
    charCountParagraph.textContent = `Characters written: ${textArea.value.length}/600`;
    if (textArea.value.length >= 600) {
      textArea.classList.add("text-danger");
    } else {
      textArea.classList.remove("text-danger");
    }
  });
  container.appendChild(textArea);

  return container;
}

export { createTextArea };
