const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// undefined, 0, null, NaN, or "" will all pass, treated as falsy values.

test('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
});

// .not.toBeFalsy is possible, but more a linguistic thing.
// You would use toBeTruthy

// first one fails, because an object is a reference type.
// use toEqual or toStrictEqual instead

test('Should be Rata plan', () => {
    expect(functions.createUser()).toBe({ firstName: 'Rata', lastName: 'plan'});
});

test('Should be Rata plan', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Rata', lastName: 'plan'});
});

test('Should be Rata plan', () => {
    expect(functions.createUser()).toStrictEqual({ firstName: 'Rata', lastName: 'plan'});
});

test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600)
});

// Regex
test('There is no I in team', () => {
     expect('team').not.toContain('i');
});

// Arrays - hoofdlettergevoelig
test('Admin should be in usernames', () => {
const usernames = ['john', 'karen', 'admin'];
expect(usernames).toContain('Admin')
});