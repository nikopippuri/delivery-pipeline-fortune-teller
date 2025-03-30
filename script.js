// Ennustusvaihtoehdot
const fortunes = [
    "Tulevaisuus näyttää valoisalta!",
    "Kohtaat pian uuden mahdollisuuden.",
    "Varo tekemästä hätiköityjä päätöksiä.",
    "Onni on puolellasi tänään!",
    "Jokin menneisyydestäsi palaa elämääsi.",
    "Rohkeus palkitaan pian.",
    "Pidä silmällä uusia mahdollisuuksia!",
    "Älä pelkää kysyä apua, kun tarvitset sitä."
];

// Kun nappia painetaan, näytetään satunnainen ennustus
document.getElementById("fortune-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortune-result").textContent = fortunes[randomIndex];
});
