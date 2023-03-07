const nomeUtente = prompt(`Inserisci il tuo nome:`);
const cognomeUtente = prompt(`Inserisci il tuo cognome:`);
const colorePreferito = prompt(`Inserisci il tuo colore preferito:`)
const numeroRandomico = Math.floor(Math.random() * 100);
document.getElementById("Password").innerHTML = `<h1>${nomeUtente}${cognomeUtente}${colorePreferito}${numeroRandomico}</h1>`;
console.log(nomeUtente+cognomeUtente+colorePreferito+numeroRandomico)