window.addEventListener('load', loadPage);

var currentNumber = null;
var currentNumberInFull = null;

function loadPage() {
  const slider = document.querySelector('#slider');
  slider.addEventListener('change', changeValue);

  currentNumber = document.querySelector('#inputCurrentNumber');
  currentNumberInFull = document.querySelector('#inputNumberInFull');

  refreshValues(slider.value);
}

function changeValue() {
  refreshValues(this.value);
}

function refreshValues(value) {
  currentNumber.value = value;
  convertNumberToExtense(value);
}

const unidade = ["um", "dois", "três", "quatro", "cinco",
  "seis", "sete", "oito", "nove", "dez", "onze",
  "doze", "treze", "quatorze", "quinze", "dezesseis",
  "dezessete", "dezoito", "dezenove"];

const dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta",
  "sessenta", "setenta", "oitenta", "noventa"];

const centena = ["cem", "cento", "duzentos", "trezentos",
  "quatrocentos", "quinhentos", "seiscentos",
  "setecentos", "oitocentos", "novecentos"];

function convertNumberToExtense(number) {
  let index = null;
  let rest = number;
  let text = [];

  if (number > 99) {
    rest = number % 100;
    index = rest == 0 ? 0 : Math.floor(number / 100);
    text.push(centena[index]);
  }

  if (rest > 19 && rest < 100) {
    index = Math.floor(rest / 10);
    rest = number % 10;
    text.push(dezena[index]);
  }

  if (rest > 0 && rest < 20) {
    index = rest - 1;
    text.push(unidade[index]);
  }

  currentNumberInFull.value = text.join(' e ');
  currentNumberInFull.value = currentNumberInFull.value.substr(0, 1).toUpperCase() + currentNumberInFull.value.substr(1);
}