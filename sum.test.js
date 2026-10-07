const sum = require('./sum');

describe.skip('sum-testit', () => {
    //...kaikki alla olevat testit skipataan...

 test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => {
     expect(sum(1, 2)).toBe(3);
 });

 test('syötteet numeromaisia merkkijonoja', () => {
  expect(sum("1", "2")).toBe(3);
});

test('syötteet merkkijonoja, heitetään poikkeus', () => {
   expect(() => {
   sum("jesse", "minna")}).toThrow('ei lukuja');
});

test('annetaan vain yksi parametri, palautetaan luku itse', () => {
  expect(sum(4)).toBe(4);
});

test('parametrit puuttuvat, heitetään poikkeus', () => { 
  expect(() => {
    sum()}).toThrow('ei parametreja');
});

});