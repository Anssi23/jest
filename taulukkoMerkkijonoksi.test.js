const taulukkoMerkkijonoksi = require('./taulukkoMerkkijonoksi');

test('muuntaa taulukon merkkijonoksi, jossa alkioiden välissä on : merkki', () => {
    expect(taulukkoMerkkijonoksi(['a', 'b', 'c'])).toBe('a:b:c');
});

test('tyhjä taulukko palauttaa tyhjän merkkijonon', () => {
    expect(taulukkoMerkkijonoksi([])).toBe('');
});

test('yksi alkio taulukossa palauttaa saman alkion', () => {
    expect(taulukkoMerkkijonoksi(['a'])).toBe('a');
});

test('yksi merkkijono taulukossa palauttaa saman merkkijonon', () => {
    expect(taulukkoMerkkijonoksi(['auto'])).toBe('auto');
});

test('taulukon alkiot ovat merkkijonoja', () => {
    expect(taulukkoMerkkijonoksi(['xy', 'yz', 'zy'])).toBe('xy:yz:zy');
});

test('taulukossa ei saa olla alkiona toista taulukkoa', () => {
    expect(() => taulukkoMerkkijonoksi(['a', ['b'], 'c'])).toThrow('Taulukossa ei saa olla taulukoita tai olioita');
});

test('taulukossa ei saa olla alkiona oliota', () => {
    expect(() => taulukkoMerkkijonoksi(['a', { b: 1 }, 'c'])).toThrow('Taulukossa ei saa olla taulukoita tai olioita');
});

test('taulukossa ei saa olla alkiona undefined', () => {
    expect(() => taulukkoMerkkijonoksi(['a', undefined, 'c'])).toThrow('Taulukossa ei saa olla null- tai undefined-alkioita');
});

test('taulukossa ei saa olla alkiona null', () => {
    expect(() => taulukkoMerkkijonoksi(['a', null, 'c'])).toThrow('Taulukossa ei saa olla null- tai undefined-alkioita');
});

test('taulukon alkiot voivat olla totuusarvoja', () => {
    expect(taulukkoMerkkijonoksi([true, false, true])).toBe('true:false:true');
});

test('taulukon alkiot voivat olla numeroita', () => {
    expect(taulukkoMerkkijonoksi([1, 2, 3])).toBe('1:2:3');
});

test('taulukon alkiot voivat olla sekoitus merkkijonoja, numeroita ja totuusarvoja', () => {
    expect(taulukkoMerkkijonoksi(['a', 1, true])).toBe('a:1:true');
});