const Engineer = require('../lib/Engineer');

//Test if each object and function work by setting value and evaluating after running script
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
    const testValue = "abergtra";
    const employee = new Engineer("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
})