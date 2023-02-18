window.addEventListener("mousemove", (event) => {
  let trailer = document.createElement("div");
  trailer.className = "trail";
  trailer.style.left = event.pageX - 12 + "px";
  trailer.style.top = event.pageY - 12 + "px";
  document.body.appendChild(trailer);
});
