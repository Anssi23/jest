//funktio joka tarkistaa onko henkilö täysi-ikäinen
const taysiIkainen = (ika) => {
    if(ika === undefined || ika === null || typeof ika !== 'number' || ika < 0){
        throw new Error('virheellinen syöte');
    }

    //console.log(ika);

    if(ika >= 18){        
        return true;
    } else {        
        return false;
    }
}

module.exports = taysiIkainen;