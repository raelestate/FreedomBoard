function createNavbar() {
  const div = document.createElement("div");
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg bg-transparent p-2 pt-3";

  div.className = "container-fluid";

  const a = document.createElement("a");
  a.id = "hover-nav";
  a.className = "navbar-brand p-3";
  a.href = "/";
  a.innerText = "Freedom Board";

  nav.appendChild(a);
  div.appendChild(nav);

  return nav;
}
export { createNavbar };
