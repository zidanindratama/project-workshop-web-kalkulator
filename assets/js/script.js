/*
  // KALKULATOR SEDERHANA
  // V.1.0
  // AUTHOR : ZIDAN INDRATAMA
*/

const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

const sin = () => {
  screen.value = Math.sin(screen.value);
};

const cos = () => {
  screen.value = Math.cos(screen.value);
};

const tan = () => {
  screen.value = Math.tan(screen.value);
};

const pow = () => {
  screen.value = Math.pow(screen.value, 2);
};

const sqrt = () => {
  screen.value = Math.sqrt(screen.value, 2);
};

const log = () => {
  screen.value = Math.log(screen.value);
};

const pi = () => {
  screen.value = Math.PI;
};

const e = () => {
  screen.value = Math.E;
};

const fact = () => {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
};

const backspc = () => {
  screen.value = screen.value.substr(0, screen.value.length - 1);
};
