const Employee = require('../lib/Employee');

test('Create Employee Object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Name', () => {
    const testName = "Asher"
    const employee = new Employee(testName);
    expect(employee.name).toBe(testName);
});
test('Set ID', () => {
    const testId = 1315;
    const employee = new Employee("Asher", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "asher@gmail.com"
    const employee = new Employee("Asher", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('Get name from getName', () => {
    const testName = "Asher"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('Get ID from getId', () => {
    const testId = "1315"
    const employee = new Employee("Asher", testId);
    expect(employee.getId()).toBe(testId);
});
test('Get email from getEmail', () => {
    const testEmail = "asher@gmail.com"
    const employee = new Employee("Asher", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('Get Role function', () => {
    const testRole = "Employee"
    const employee = new Employee("Asher", 1, "asher@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});
