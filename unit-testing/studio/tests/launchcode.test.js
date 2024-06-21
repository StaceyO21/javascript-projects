// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should return 'nonprofit' for organization key", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("should return 'Jeff' for executive director key", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("should return 100 for percentageCoolEmployees key", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("programsOffered contains 3 items: 'Web Development', 'Data Analysis', 'Liftoff'", () => {
    expect(launchcode.programsOffered.includes("Web Development")).toBe(true);
    expect(launchcode.programsOffered.includes("Data Analysis")).toBe(true);
    expect(launchcode.programsOffered.includes("Liftoff")).toBe(true);
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("launchOutput{} should return 'Launch!' when number devisible by 2", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("launchOutput{} should return 'Code!' when number devisible by 3", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  test("launchOutput{} should return 'Rocks!' when num devisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("launchOutput{} should return 'LaunchCode!' when num devisible by 2 AND 3", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("launchOutput{} should return 'Code Rocks!' when num devisible by 3 AND 5", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test("launchOutput{} should return ''LaunchCode Rocks!' when num devisible by 2, 3, AND 5", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  test("launchOutput{} should return 'Rutabagas! That doesn't work.' when num NOT devisible by 2, 3, OR 5", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  })

});
