function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

let box = document.querySelector("atay");


let isDarkMode = false;
const gwapo = () => {
    if (isDarkMode) {
        isDarkMode = false;
    }
    else {
        isDarkMode = true;
    }
    isDarkMode ? document.body.classList.add("gwapo") : document.body.classList.remove("gwapo")
}