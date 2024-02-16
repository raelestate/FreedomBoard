const createFooter = () => {
  const footer = document.createElement("footer");
  footer.className = "py-3 my-4 pt-5";

  const nav = document.createElement("ul");
  nav.className = "nav justify-content-center border-bottom pb-3 mb-3";

  const listItem = document.createElement("li");
  listItem.className = "nav-item";

  const link = document.createElement("a");
  link.href = "/";
  link.className = "nav-link px-2 text-body-secondary";
  link.textContent = "Home";

  listItem.appendChild(link);
  nav.appendChild(listItem);
  footer.appendChild(nav);

  const paragraph = document.createElement("p");
  paragraph.className = "text-center text-body-secondary";
  paragraph.textContent = "© RaelEstate";
  footer.appendChild(paragraph);

  return footer;
};

export { createFooter };
