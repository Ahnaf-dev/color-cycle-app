const root = document.querySelector(":root");

window.addEventListener("DOMContentLoaded", () => {
  const form = document.forms[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(1);
  });
});
