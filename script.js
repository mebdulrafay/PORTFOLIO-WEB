// Page load smooth fade
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Button click animation
const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.innerText = "MESSAGE SENT ✔";
  button.style.background = "rgba(0,255,200,0.4)";
});

// Smooth scroll (future sections)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
});
