// mengimport data dari fcNama.js
// const menyapa = require ("./fcNama.js");

// jika ingin melakukan import lebih baik membuat var sesuai dengan nama file
const fcNama = require ("./fcNama.js")

console.log(fcNama.fcSapa("sandhika"), fcNama.time);
console.log(fcNama.mahasiswa.cetakNama())