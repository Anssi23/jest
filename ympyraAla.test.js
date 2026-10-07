const ympyraAla = require('./ympyraAla');

describe.skip('skip ympyraAla testit', () => {

    test('ympyrän ala säteen perusteella', () => {
        expect(ympyraAla(2)).toBe(12.57);
    });

    test('Ympyrän ala negatiivisella säteellä', () => {
        expect(() => ympyraAla(-2)).toThrow('Säde ei voi olla nolla tai negatiivinen');
    });
    test('Ympyrän ala ei-numerollisella syötteellä', () => {
        expect(() => ympyraAla('abc')).toThrow('ei lukuja');
    });
    test('Ympyrän ala tyhjällä syötteellä', () => {
        expect(() => ympyraAla()).toThrow('ei lukuja');
    });
    test('Ympyrän ala nollalla säteellä', () => {
        expect(() => ympyraAla(0)).toThrow('Säde ei voi olla nolla tai negatiivinen');
    });

});

