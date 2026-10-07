// Laskee tuotteen kokonaishinnan, kun sen parametrit ovat hinta, kanta-asiakkuus (totuusarvo) 
// ja alv-prosentti (esim. 24%, 14%).
// Jos asiakas on kanta-asiakas, ennen ALV:in lisäämistä hinnasta vähennetään 
// alennus seuraavien ehtojen mukaisesti:
// hinta on 50 - 150€ alennus 2.5%
// hinta 150 - 250€ alennus 5%
// yli on 250€ alennus 10%
// hinta x alennuksen prosenttikerroin x alv:in prosenttikerroin

const tuotteenHinta = (hinta, kantaAsiakas, alvProsentti) => {
    if (typeof hinta !== 'number' || !Number.isFinite(hinta) || hinta < 0) {
        throw new Error('Hinta ei ole kelvollinen numero');
    }
    if (typeof kantaAsiakas !== 'boolean') {
        throw new Error('Kanta-asiakkuus ei ole kelvollinen totuusarvo');
    }
    if (typeof alvProsentti !== 'number' || !Number.isFinite(alvProsentti) || alvProsentti < 0) {
        throw new Error('ALV-prosentti ei ole kelvollinen numero');
    }

    let alvprosenttikerroin = 1 + alvProsentti / 100;
    let kokonaishinta = hinta;
    if (kantaAsiakas) {
        if (hinta >= 50 && hinta < 150) {
            kokonaishinta *= 0.975; // 2.5% alennus
        } else if (hinta >= 150 && hinta <= 250) {
            kokonaishinta *= 0.95; // 5% alennus
        } else if (hinta > 250) {
            kokonaishinta *= 0.9; // 10% alennus
        }
    }
    // lasketaan kokonaishinta alennuksen jälkeen ja lisätään ALV    
    kokonaishinta *=  alvprosenttikerroin;
    return Math.round(kokonaishinta * 100) / 100;
};


module.exports = tuotteenHinta;
