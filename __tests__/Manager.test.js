const Manager = require('../lib/Manager');


test('creating a manager object invoked from code from Employee.js', () => {
    const manager = new Manager('Michael', 1, 'Michael@domain.com', '503-1819');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    console.log(`Manager Name: ${manager.name}`);
    console.log(`Manager ID: ${manager.id}`);
    console.log(`Manager E-mail: ${manager.email}`);
});

test('creating the office number', () => {
    const manager = new Manager('Michael', 2, 'Michael@domain.com', '503-1819');

    expect(manager.officeNumber).toEqual(expect.any(String));
    console.log(`Office Number: ${manager.officeNumber}`);
});

test('creating the role for manager', () => {
    const manager = new Manager('Michael', 2, 'Michael@domain.com', '503-1819');

    expect(manager.getRole()).toBe('Manager');
}); 