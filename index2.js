let button = document.getElementById("random_button");
let button2 = document.getElementById("random_button2");
let color_box = document.getElementById("color_box");
let r,g,b,a;
let r1,g1,b1,a1;
let n = 0;
let t1;
button.addEventListener("click", () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  a = Math.floor(Math.random() * 256);

  color_box.style.backgroundColor = `rgb(${r},${g},${b},${a})`;
});

button2.addEventListener("click", () => {
  if (n === 0) {
    t1 = setInterval(() => {
      r1 = Math.floor(Math.random() * 256);
      g1 = Math.floor(Math.random() * 256);
      b1 = Math.floor(Math.random() * 256);
      a1 = Math.floor(Math.random() * 256);
      color_box.style.backgroundColor = `rgb(${r1},${g1},${b1},${a1})`;
    }, 100);
    n = 1;
    console.log(n);
  } else if (n === 1) {
    clearInterval(t1);
    n = 0;
    console.log(n);
  }

//   color_box.style.backgroundColor = `rgb(${r},${g},${b},${a})`;
});
