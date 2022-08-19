const Engineer = require('../lib/Engineer');

test('creating an engineer object inherited from Employee.js', () => {
    const engineer = new Engineer('Michael', 1, 'Michael@domain.com', 'placeholder');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));

    console.log(`Engineer Name: ${engineer.name}`);
    console.log(`Engineer ID: ${engineer.id}`);
    console.log(`Engineer E-mail: ${engineer.email}`);
});

test('getting information off of github', () => {
    const engineer = new Engineer('Michael', 1, 'Michael@domain.com', 'placeholder');

    expect(engineer.github).toEqual(expect.any(String));
});

test('creating the role for engineer', () => {
    const engineer = new Engineer('Michael', 1, 'Michael@domain.com', 'placeholder');

    expect(engineer.getRole()).toBe('Engineer');

});  