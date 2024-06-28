const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
lastModifiedElement.style.color = "gold";
lastModifiedElement.style.fontSize = "0.75em";