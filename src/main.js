// Create a div element to serve as the root container
const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

// Render the app inside the root container
function render() {
  rootElement.innerHTML = `
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <div id="root-inner"></div>
    </div>
  `;
  // Render the app component directly using vanilla JS
  const appElement = React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  );
  const rootInnerElement = document.getElementById("root-inner");
  ReactDOM.render(appElement, rootInnerElement);
}

render();

// Load Bootstrap JS without using type="module"
const scriptElement = document.createElement("script");
scriptElement.src =
  "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.body.appendChild(scriptElement);
