const [isEven, isOdd] = require('./index')

test('2 must be even', () => {
    expect(isEven(2)).toBe(true);
    expect(isOdd(2)).toBe(false);
});

test('1 must be odd', () => {
    expect(isOdd(1)).toBe(true);
    expect(isEven(1)).toBe(false);
});
