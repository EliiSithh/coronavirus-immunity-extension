// Function to replace occurrences of 'coronavirus' with a rainbow effect
function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
  }
}

// Apply text replacement when the page loads
document.addEventListener("DOMContentLoaded", () => {
  replaceText(document.body);
});

