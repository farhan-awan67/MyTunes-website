const menu = document.getElementById("menu");
let links = document.getElementById("links");
let close = document.getElementById("close");

menu.addEventListener("click", () => {
  links.style.right = 0;
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  links.style.right = "-100%";
  menu.style.display = "block";
  close.style.display = "none";
});
