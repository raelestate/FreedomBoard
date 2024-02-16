// function createNavbar() {
//   const nav = document.createElement("nav");
//   nav.classList.add(
//     "navbar",
//     "navbar-expand-lg",
//     "bg-transparent",
//     "p-2",
//     "pt-3"
//   );

//   const container = document.createElement("div");
//   container.classList.add("container-fluid");
//   nav.appendChild(container);

//   const brand = document.createElement("a");
//   brand.id = "hover-nav";
//   brand.classList.add("navbar-brand");
//   brand.textContent = "FreedomBoard";
//   brand.addEventListener("click", () => {
//     // Replace with your actual navigation logic here (e.g., using a routing library)
//     console.log("Navigating to home page");
//   });
//   container.appendChild(brand);

//   return nav.innerHTML;
// }

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
