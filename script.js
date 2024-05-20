// URL to redirect to when the button is clicked
const redirectUrl = "https://cloudworkmates.com/";

// Create a style element for the button
const style = document.createElement("style");
style.innerHTML = `
  #floatingButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #008CBA; /* Blue background */
    color: white; /* White text */
    border: none;
    padding: 15px 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
`;
document.head.appendChild(style);

// Create the button element
const button = document.createElement("button");
button.id = "floatingButton";
button.innerText = "+";
document.body.appendChild(button);

// Add the click event listener to redirect
button.addEventListener("click", () => {
  window.open(redirectUrl, "_blank");
});
