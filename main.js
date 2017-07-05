let output = document.getElementById('output');
let vMax = document.getElementById('v-max');
let vMin = document.getElementById('v-min');
let vVar = document.getElementById('v-var');


function calc() {
  let result = vVar.value * (vMax.value - vMin.value);
  console.log(result);
  output.innerHTML = "<p>I think the result is " + result.toFixed(2) + "%!</p>"
}
