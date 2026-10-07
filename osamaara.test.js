const osamaara = require('./osamaara');

describe.skip('ohita kaikki osamaara testit', () => {

test('jakaa luvut oikein', () => {
    expect(osamaara(6, 3)).toBe(2);
});

test('jakaa luvut oikein desimaalina', () => {
    expect(osamaara(7, 2)).toBe(3.5);
});

test('jakaa luvut oikein negatiivisilla arvoilla', () => {
    expect(osamaara(-6, 3)).toBe(-2);
});

test('jakaa luvut oikein, kun molemmat luvut ovat negatiivisia', () => {
    expect(osamaara(-6, -3)).toBe(2);
});

test('syötteessä toinen arvo on merkkijono', () => {    
  expect(osamaara("6", 3)).toBe(2);
});

test('syötteessä ensimmäinen arvo on merkkijono', () => {    
  expect(osamaara(6, "3")).toBe(2);
});

test('syötteessä molemmat arvot ovat merkkijonoja', () => {    
  expect(osamaara("6", "3")).toBe(2);
});

test('syötteet merkkijonoja, heitetään poikkeus', () => {
    expect(() => {
        osamaara("a", "b");
    }).toThrow();
});

test('heittää virheen, kun jaetaan nollalla', () => {
    expect(() => {
        osamaara(6, 0);
    }).toThrow();
});
});