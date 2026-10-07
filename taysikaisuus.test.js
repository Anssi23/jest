//testi joka tarkistaa onko henkilö täysi-ikäinen
const taysiIkainen = require('./taysikaisuus');
describe.skip('sum-testit', () => {
    //...kaikki alla olevat testit skipataan...
test('syötteessä annettu tyhjä arvo', () => {
    expect(() => {
        taysiIkainen(undefined);
    }).toThrow();
});
test('syötteessä annettu null-arvo', () => {
    expect(() => {
        taysiIkainen(null);
    }).toThrow();
});
test('syötteessä annettu negatiivinen arvo', () => {
    expect(() => {
        taysiIkainen(-1);
    }).toThrow();
});

test('syötteessä annettu merkkijono', () => {
    expect(() => {
        taysiIkainen("18");
    }).toThrow();
});

test('syötteessä annettu arvo 0', () => {
    expect(() => {
        taysiIkainen(0);
    }).toThrow();
});

test('henkilö on täysi-ikäinen arvolla 19', () => {
    expect(taysiIkainen(19)).toBe(true);
});

test('henkilö on täysi-ikäinen', () => {
    expect(taysiIkainen(18)).toBe(true);
});

test('henkilö ei ole täysi-ikäinen', () => {
    expect(taysiIkainen(17)).toBe(false);
});
});