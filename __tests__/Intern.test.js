const Intern = require('../lib/Intern');

test('creates an intern object inherited from Employee', () => {
    const intern = new Intern('Michael', 1, 'Michael@domain.com', 'USF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));

    console.log(`Intern Name: ${intern.name}`);
    console.log(`Intern ID: ${intern.id}`);
    console.log(`Intern E-mail: ${intern.email}`);
});

test('gets school info', () => {
    const intern = new Intern('Michael', 1, 'Michael@domain.com', 'USF');

    expect(intern.school).toEqual(expect.any(String));
    console.log(intern.school);
});

test('creates a role of intern', () => {
    const intern = new Intern('Michael', 1, 'Michael@domain.com', 'USF');

    expect(intern.getRole()).toBe('Intern');

    console.log(intern.getRole());
});