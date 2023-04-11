const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const liens = document.querySelectorAll(".lien-navigation");
const navPrincipale = document.querySelectorAll(".nav-principale");
console.log(burger);
console.log(nav);
console.log(liens);
console.log(navPrincipale);

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
};
window.addEventListener("scroll", changeFond);
