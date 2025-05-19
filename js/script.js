function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function resolverEj6() {
  let z = parseFloat(document.getElementById("z6").value);
  let a = 0.4 * z ** 4 + 3.1 * z ** 2 - 162.3 * z - 80.7;
  let b = (z ** 3 - 23) / Math.cbrt(z ** 2 + 17.5);
  document.getElementById("resultado6").innerHTML = 
    "(a) Resultado: " + a.toFixed(3) + "<br>" +
    "(b) Resultado: " + b.toFixed(3);
}

function resolverEj7() {
  let t = parseFloat(document.getElementById("t7").value);
  let a = 0.5 * Math.exp(2 * t) - 3.8 * t ** 3;
  let b = (6 * t ** 2 + 6 * t - 2) / (t ** 2 - 1);
  document.getElementById("resultado7").innerHTML = 
    "(a) Resultado: " + a.toFixed(3) + "<br>" +
    "(b) Resultado: " + b.toFixed(3);
}

function resolverEj8() {
  let x = parseFloat(document.getElementById("x8").value);
  let y = parseFloat(document.getElementById("y8").value);
  let a = ((x ** 2 + y ** 2) ** (2 / 3) + (x * y) / (y - x));
  let b = (Math.sqrt(x + y) / (x - y) ** 2 + 2 * x ** 2 - x * y ** 2);
  document.getElementById("resultado8").innerHTML = 
    "(a) Resultado: " + a.toFixed(3) + "<br>" +
    "(b) Resultado: " + b.toFixed(3);
}

function resolverEj9() {
  let c = parseFloat(document.getElementById("c9").value);
  let d = parseFloat(document.getElementById("d9").value);
  let a = c * d ** 2;
  let b = (c + a) / (c - d);
  let resA = Math.exp(d - b) + Math.cbrt(c + a - (c * a) ** d);
  let resB = d / c + (c * d / b) ** 2 - c ** d - a / b;
  document.getElementById("resultado9").innerHTML = 
    "(a) Resultado: " + resA.toFixed(3) + "<br>" +
    "(b) Resultado: " + resB.toFixed(3);
}

function resolverEj10() {
  let x = parseFloat(document.getElementById("x10").value);
  let izqA = Math.cos(x) ** 2 - Math.sin(x) ** 2;
  let derA = 1 - 2 * Math.sin(x) ** 2;
  let izqB = Math.tan(x) / (Math.sin(x - 2) * Math.tan(x));
  let derB = 1 / Math.cos(x - 2);
  document.getElementById("resultado10").innerHTML =
    "(a) Izq: " + izqA.toFixed(3) + " | Der: " + derA.toFixed(3) + "<br>" +
    "(b) Izq: " + izqB.toFixed(3) + " | Der: " + derB.toFixed(3);
}