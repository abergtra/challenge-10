const Engineer = require('../lib/Engineer');

test("Set GitHub", () => {
    const testValue = "abergtra";
    const employee = new Engineer("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("Get Role function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "nosremetnarg";
    const employee = new Engineer("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})