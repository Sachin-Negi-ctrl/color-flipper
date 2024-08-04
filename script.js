const button = document.querySelector("button");

const clrname = document.querySelector("span");

const msg = document.getElementById("mesg");

let cvalue = "";

const clrflipperl = document.querySelector(".left");
const clrflipperr = document.querySelector(".right");

clrflipperl.addEventListener("click", () => {
  cvalue = "bgcolors";
  console.log(cvalue);
  msg.classList.remove("msg");
  msg.classList.add("msg-d-none");
});
clrflipperr.addEventListener("click", () => {
  cvalue = "bghex";
  console.log(cvalue);
  msg.classList.remove("msg");
  msg.classList.add("msg-d-none");
});

button.addEventListener("click", () => {
  const bgcolors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
    "purple",
    "gold",
    "navy",
    "teal",
    "brown",
    "white",
    "black",
  ];

  if (cvalue == "bgcolors") {
    const randomIndex = Math.floor(Math.random() * bgcolors.length);

    const randomColor = bgcolors[randomIndex];
    document.body.style.backgroundColor = `${randomColor}`;

    clrname.textContent = `${randomColor}`;
  } else if (cvalue == "bghex") {
    function getRandomHexValue() {
      let hexValues = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];

      return hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    function generateRandomHexColor() {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += getRandomHexValue();
      }
      return hexColor;
    }

    console.log(generateRandomHexColor());

    document.body.style.backgroundColor = `${generateRandomHexColor()}`;

    clrname.textContent = `${generateRandomHexColor()}`;
  } else {
    console.log("error");
    alert("Please select one between color flipper and simple hex");
  }
});
