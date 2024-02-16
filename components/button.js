function createButton({ onClick, children }) {
  const div = document.createElement("div");
  div.className = "container text-center";

  const button = document.createElement("button");
  button.className = "btn btn-light border rounded";
  button.addEventListener("click", onClick);

  const h5 = document.createElement("h5");
  h5.className = "m-1 fw-light";
  h5.textContent = children;

  button.appendChild(h5);
  div.appendChild(button);

  return div;
}

export { createButton };
