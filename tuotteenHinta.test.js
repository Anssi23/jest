// Testit tuotteenHinta-funktiolle
const tuotteenHinta = require('./tuotteenHinta');

test('ei-kanta-asiakas, alv 24%', () => {
    expect(tuotteenHinta(100, false, 24)).toBe(124);
});

test('kanta-asiakas, hinta 100, alv 24%', () => {
    expect(tuotteenHinta(100, true, 24)).toBe(120.90);
});

test('kanta-asiakas, hinta 50, alv 24%', () => {
    expect(tuotteenHinta(50, true, 24)).toBe(60.45);
});

test('kanta-asiakas, hinta 50.1, alv 24%', () => {
    expect(tuotteenHinta(50.1, true, 24)).toBe(60.57);
});

test('ei-kanta-asiakas, hinta 50.1, alv 24%', () => {
    expect(tuotteenHinta(50.1, false, 24)).toBe(62.12);
});

test('kanta-asiakas, hinta 150, alv 24%', () => {
    expect(tuotteenHinta(150, true, 24)).toBe(176.70);
});

test('kanta-asiakas, hinta 250, alv 24%', () => {
    expect(tuotteenHinta(250, true, 24)).toBe(294.50);
}); 

test('kanta-asiakas, hinta 0, alv 24%', () => {
    expect(tuotteenHinta(0, true, 24)).toBe(0);
});

test('kanta-asiakas, hinta alle 50, alv 24%', () => {
    expect(tuotteenHinta(49.90, true, 24)).toBe(61.88);
});

test('ei-kanta-asiakas, hinta alle 50, alv 24%', () => {
    expect(tuotteenHinta(49.90, false, 24)).toBe(61.88);
});

test('kanta-asiakas, hinta 200, alv 24%', () => {
    expect(tuotteenHinta(200, true, 24)).toBe(235.60);
});

test('kanta-asiakas, hinta 300, alv 24%', () => {
    expect(tuotteenHinta(300, true, 24)).toBe(334.80);
});

test('virheellinen hinta', () => {
    expect(() => tuotteenHinta('100', true, 24)).toThrow('Hinta ei ole kelvollinen numero');
});

test('virheellinen kanta-asiakkuus', () => {
    expect(() => tuotteenHinta(100, 'true', 24)).toThrow('Kanta-asiakkuus ei ole kelvollinen totuusarvo');
});

test('virheellinen kanta-asiakkuus, virheellinen merkkijono', () => {
    expect(() => tuotteenHinta(100, 'abc', 24)).toThrow('Kanta-asiakkuus ei ole kelvollinen totuusarvo');
});

test('virheellinen alv-prosentti', () => {
    expect(() => tuotteenHinta(100, true, '24')).toThrow('ALV-prosentti ei ole kelvollinen numero');
});

test('negatiivinen alv-prosentti', () => {
    expect(() => tuotteenHinta(100, true, -24)).toThrow('ALV-prosentti ei ole kelvollinen numero');
});

test('kanta-asiakas, alv-prosentti nolla', () => {
    expect(tuotteenHinta(100, true, 0)).toBe(97.5);
});

test('ei-kanta-asiakas, alv-prosentti nolla', () => {
    expect(tuotteenHinta(100, false, 0)).toBe(100);
});

test('negatiivinen hinta', () => {
    expect(() => tuotteenHinta(-100, true, 24)).toThrow('Hinta ei ole kelvollinen numero');
});