let colors = ['lightpink', 'lightblue', 'lightgreen', 'lightblack', 'lightyellow'];
let button = document.getElementById('button');

button.addEventListener("click", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let body = document.querySelector('body');
    body.style.background = randomColor;
  });
