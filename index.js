import { currencyCodes } from "./currency.js";
var codes = Object.keys(currencyCodes);

var cc = [];
for (var i = 0; i < codes.length; i++) {
  cc.push(codes[i]);
}
var select = document.getElementById("scurr");
for (var i = 0; i < cc.length; i++) {
  var optn = cc[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  select.appendChild(el);
}

var year = document.getElementById("year");
var yr = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];
for (var i = 0; i < yr.length; i++) {
  var optn = yr[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  year.appendChild(el);
}
