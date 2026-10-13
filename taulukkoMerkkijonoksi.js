// Funktio, joka muuntaa taulukon merkkijonoksi, jossa alkioiden 
// välissä on : merkki
function taulukkoMerkkijonoksi(taulukko) {
    for (const alkio of taulukko) {
        if (alkio === null || alkio === undefined) {
            throw new Error('Taulukossa ei saa olla null- tai undefined-alkioita');
        }
        if (typeof alkio === 'object') {
            throw new Error('Taulukossa ei saa olla taulukoita tai olioita');
        }
    }
    return taulukko.join(':');
}

module.exports = taulukkoMerkkijonoksi;