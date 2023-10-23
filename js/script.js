// Fetch the header component
fetch("/html/components/header.html")
  .then((response) => response.text())
  .then((component_html) => {
    let list_of_elements = document.getElementsByClassName("header-component");
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });

// Fetch the footer component
fetch("/html/components/footer.html")
  .then((response) => response.text())
  .then((component_html) => {
    let list_of_elements = document.getElementsByClassName("footer-component");
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });

function popupHelp() {
  const popup = document.getElementById("help-popup");
  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
  } else {
    setTimeout(() => {
      popup.classList.add("show");
    }, 0);
    setTimeout(() => {
      popup.classList.remove("show");
    }, 8000);
  }
}
