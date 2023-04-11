const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const liens = document.querySelectorAll(".lien-navigation");
const navPrincipale = document.querySelectorAll(".nav-principale");
const retourHaut = document.querySelector(".retourHaut");
let hauteurAvantNav = nav.offsetTop;
console.log(burger);
console.log(nav);
console.log(liens);
console.log(navPrincipale);
console.log(retourHaut);

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

const changeFond = () => {
  if (window.scroll >= 200) {
    nav.classList.add("font-scroll");
  } else {
    nav.classList.remove("font-scroll");
  }
  //Retourhaut
  if (window.scrollY >= 500) {
    retourHaut.classList.add("active");
  } else {
    retourHaut.classList.remove("active");
  }
};
window.addEventListener("scroll", changeFond);
