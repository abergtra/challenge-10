const Intern = require("../lib/Intern");

//Test if each object and function work by setting value and evaluating after running script
test("Set School", () => {
    const testValue = "University of the Pacific";
    const employee = new Intern("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("Get Role function", () => {
    const testValue = "Intern";
    const employee = new Intern("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of the Pacific";
    const employee = new Intern("Asher", 1, "asher@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});