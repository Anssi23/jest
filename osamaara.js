//funktio joka laskee osamäärän
const osamaara = (a, b) => {
    const result = Number(a) / Number(b);
    console.log(result);  
    
    if(b === 0){
        throw new Error('nollalla ei voi jakaa');
    }
    
    if(Number.isNaN(result)){
        throw new Error('ei lukuja');
    }
    return result;
}

module.exports = osamaara;