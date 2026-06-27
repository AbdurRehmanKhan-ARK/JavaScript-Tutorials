const buttons = document.querySelectorAll(".button"); // All buttons (spans)
const body = document.querySelector("body"); // Body element

buttons.forEach(function (button) {
  // Looping through all buttons

  button.addEventListener("click", function (event) {
    // Event listener for button click
    body.style.backgroundColor = event.target.id; // Changing background color
    // for the nav bar and body due to color change we apply relevant bg colors
    if (event.target.id === "white" || event.target.id === "yellow") {
      body.style.color = "#212121"; // Dark text for light backgrounds
      subSpan.style.color = "#666"; // Sub-text adjustment
    } else {
      body.style.color = "#ffffff"; // White text for dark backgrounds
      subSpan.style.color = "#ccc"; // Sub-text adjustment
    }
  });
});
