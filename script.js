// Function to replace occurrences of 'coronavirus' with a rainbow effect
function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      const newElement = document.createElement("span");
      newElement.className = "rainbow";
      newElement.textContent = element.textContent;
      element.replaceWith(newElement);
    }
  }
}

// Run the script when the page loads
document.addEventListener("DOMContentLoaded", () => {
  replaceText(document.body);
});
