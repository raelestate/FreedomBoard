const textarea = document.getElementById("myTextarea");
const characterCountSpan = document.getElementById("characterCount");

// Improved event handling for better responsiveness
textarea.addEventListener("input", updateCharacterCount);
textarea.addEventListener("keydown", updateCharacterCount);

function updateCharacterCount() {
  const currentLength = textarea.value.length;
  const remainingCharacters = 2000 - currentLength;

  characterCountSpan.textContent = `${currentLength} / 2000`;

  // Disable textarea when exceeding limit
  if (currentLength >= 2000) {
    textarea.classList.add("disabled");
    textarea.value = textarea.value.substring(0, 2000); // Enforce limit
  } else {
    textarea.classList.remove("disabled");
  }
}

// Prevent pasting more than 2000 characters at once
textarea.addEventListener("paste", function (event) {
  event.preventDefault();

  const text = event.clipboardData.getData("text");
  const newLength = textarea.value.length + text.length;

  if (newLength > 2000) {
    alert("Character limit exceeded!");
    return;
  }

  // Truncate pasted text if necessary
  const pastedText =
    newLength < 2000 ? text : text.substring(0, 2000 - textarea.value.length);
  textarea.value += pastedText;

  updateCharacterCount();
});
