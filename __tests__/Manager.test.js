const Manager = require('../lib/Manager');


test('creates a manager object', () => {
    const manager = new Manager('Michael');

    expect(manager.name).toBe('Michael');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test('creates an office number', () => {
    const manager = new Manager('Michael');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates a role of manager', () => {
    const manager = new Manager('Michael');

    expect(manager.getRole()).toBe('Manager');
}); 