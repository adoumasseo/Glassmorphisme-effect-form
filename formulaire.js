const login = document.querySelector(".loginlink");
const formulaire = document.querySelector(".form_container");
const firstform = document.querySelector(".firstform");
const singup = document.querySelector(".signup");
const elementNumber = 2;
let compteur = 0;

login.addEventListener("click", () => {
  if (compteur > -elementNumber + 1) {
    compteur--;
  }
  formulaire.style.transform = "translateX(" + compteur * 500 + "px)";
  formulaire.style.transition = "transform 0.5s ease";
});
singup.addEventListener("click", () => {
  if (compteur < 0) {
    compteur++;
  }
  formulaire.style.transform = "translateX(" + compteur * 500 + "px)";
  formulaire.style.transition = "transform 0.5s ease";
});
