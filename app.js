// selecting btns
const btn = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const sec = document.querySelector("#sec");
const min = document.querySelector("#min");
const hour = document.querySelector("#hr");
const refresh = document.querySelector("#refresh");

// default variables
let s = 0;
let m = 0;
let h = 0;
let start = false;

btn.addEventListener("click", timerStart);

// start stop btn toggling
btn.addEventListener("click", () => {
  if (btn.innerText === "START") {
    btn.innerText = "STOP";
  } else {
    btn.innerText = "START";
  }

  start = !start;
  btn.classList.toggle("btnStart");
  btn.classList.toggle("btnStop");
});

// refresh Function
refresh.addEventListener("click", () => {
  start = !start;
  if (btn.innerText === "START") {
    btn.innerText = "STOP";
  } else {
    btn.innerText = "START";
  }
  btn.classList.toggle("btnStart");
  btn.classList.toggle("btnStop");
  sec.innerText = "00";
  min.innerText = "00";
  hour.innerText = "00";
  s = 0;
  m = 0;
  h = 0;
});

// timer function
function timerStart() {
  setInterval(() => {
    if (start === true) {
      if (s < 60) {
        s += 1;
        sec.innerText = s;
      } else {
        if (m < 60) {
          m += 1;
          min.innerText = m;
        } else {
          if (h < 60) {
            h += 1;
            hour.innerText = h;
          }
          m = 0;
        }
        s = 0;
      }
    }
  }, 1000);
}
