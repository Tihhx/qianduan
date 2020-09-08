console.log("hi")
let demo = document.querySelector('#demo');
let n = 0;
demo.innerHTML = n;

setInterval(() => { n = n + 1; demo.innerHTML = n; }, 500)
