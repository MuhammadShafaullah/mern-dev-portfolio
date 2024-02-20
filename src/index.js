

const nav = document.getElementById('mynav');
const navwhitetext = document.getElementById("navwhitetext");
window.onscroll = function () {
  
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    nav.classList.add("nav-transparent");

    nav.classList.remove("nav-colored");
  }
  else {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  }
};