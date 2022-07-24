const ham = document.getElementById("hamburger");
ham.addEventListener("click", (e) => {
  const ul = document.querySelector("nav > ul");
  ul.classList.toggle("menu-slide");
  ham.classList.toggle("cross");
});
