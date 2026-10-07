
const bussilipunhinta = require('./bussilipunhinta');
describe.skip('skip bussilipunhinta testit', () => {

test('lapset alle 7 vuotta matkustavat ilmaiseksi', () => {
    expect(bussilipunhinta(6)).toBe(0);
});
test('koululaislippu 7 vuotta', () => {
    expect(bussilipunhinta(7)).toBe(1);
});
test('koululaislippu 8 vuotta', () => {
    expect(bussilipunhinta(8)).toBe(1);
});

test('nuorisolippu 16 vuotta', () => {
    expect(bussilipunhinta(16)).toBe(1.5);
});

test('nuorisolippu 25 vuotta', () => {
    expect(bussilipunhinta(25)).toBe(1.5);
});

test('aikuinen 26 vuotta', () => {
    expect(bussilipunhinta(26)).toBe(3);
});

test('aikuinen 30 vuotta', () => {
    expect(bussilipunhinta(30)).toBe(3);
});
test('aikuinen 65 vuotta', () => {
    expect(bussilipunhinta(65)).toBe(3);
});

test('seniorit yli 65 vuotta ja vanhemmat', () => {
    expect(bussilipunhinta(66)).toBe(1.5);
});
});