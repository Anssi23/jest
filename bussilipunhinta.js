// Funktio, joka laskee bussilipun hinnan ikäryhmän perusteella 
const bussilipunhinta = (ika) => {
    if (ika < 7) {
        return 0; // Lapset alle 7 vuotta matkustavat ilmaiseksi
    }else if (ika < 16) {
        return 1; // koululaislippu 7-15 vuotta
    } else if (ika >= 16 && ika <= 25) {
        return 1.5; // Nuorisolippu 16-25 vuotta
    } else if (ika > 25 && ika <= 65) {
        return 3; // Aikuiset 26-65 vuotta
    } else {
        return 1.5; // Seniorit yli 65 vuotta ja vanhemmat
    }
}

module.exports = bussilipunhinta;