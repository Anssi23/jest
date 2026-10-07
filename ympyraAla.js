// Laskee ympyrän alan säteen perusteella ja pyöristää kahteen desimaaliin
const ympyraAla = (sade) => {
    const luku = Number(sade);

    if (!Number.isFinite(luku)) {
        throw new Error('ei lukuja');
    }
    if (luku <= 0) {
        throw new Error('Säde ei voi olla nolla tai negatiivinen');
    }

    return Math.round(Math.PI * luku * luku * 100) / 100;
};

module.exports = ympyraAla;