// Function to change the text content
function changeText() {
  const text = document.getElementById("dynamic-text");
  text.textContent = "You clicked the button! 🎉";
}

// Function to modify styles
function styleText() {
  const styleTarget = document.getElementById("style-text");
  styleTarget.style.color = "darkorange";
  styleTarget.style.fontSize = "24px";
  styleTarget.style.fontWeight = "bold";
}

// Function to add a new element
function addElement() {
  const container = document.getElementById("container");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "🎈 A new element has been added!";
  newParagraph.classList.add("added");
  container.appendChild(newParagraph);
}

// Function to remove the last added element
function removeElement() {
  const container = document.getElementById("container");
  const addedElements = container.querySelectorAll(".added");
  if (addedElements.length > 0) {
    container.removeChild(addedElements[addedElements.length - 1]);
  }
}
