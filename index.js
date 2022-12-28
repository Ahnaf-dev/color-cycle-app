const root = document.querySelector(":root");

window.addEventListener("DOMContentLoaded", () => {
  const form = document.forms[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let redValue = document.querySelector("input#R").value;
    let blueValue = document.querySelector("input#B").value;
    let greenValue = document.querySelector("input#G").value;
    let incrementValue = document.querySelector("input#inc").value;

    setColorCycleAnim(+redValue, +blueValue, +greenValue, +incrementValue);
  });
});

function setColorCycleAnim(red, blue, green, increment) {
  let body = document.querySelector("body");
  // let rgb = `rgb(${red}, ${green}, ${blue})`;

  const colorCycle = [
    {
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    },
    {
      backgroundColor: `rgb(${incrementRGB(red, increment, 1)}, ${incrementRGB(
        green,
        increment,
        1
      )}, ${incrementRGB(blue, increment, 1)})`,
    },
    {
      backgroundColor: `rgb(${incrementRGB(red, increment, 2)}, ${incrementRGB(
        green,
        increment,
        2
      )}, ${incrementRGB(blue, increment, 2)})`,
    },
    {
      backgroundColor: `rgb(${incrementRGB(red, increment, 3)}, ${incrementRGB(
        green,
        increment,
        3
      )}, ${incrementRGB(blue, increment, 3)})`,
    },
    {
      backgroundColor: `rgb(${incrementRGB(red, increment, 4)}, ${incrementRGB(
        green,
        increment,
        4
      )}, ${incrementRGB(blue, increment, 4)})`,
    },
  ];

  console.log(colorCycle);
}

function incrementRGB(value, inc, multiply) {
  return Math.min(value + inc * multiply, 255);
}
