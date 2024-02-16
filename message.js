function createMessage(msgContent) {
  const div = document.createElement("div");
  div.classList.add("container", "pb-5");

  const header = document.createElement("h6");
  header.classList.add("display-6", "text-center");
  header.innerHTML = msgContent;

  div.appendChild(header);

  return div;
}

export { createMessage };
