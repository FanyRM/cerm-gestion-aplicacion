const multiplicar = require("./math");

test("multiplicar 2 * 3 es igual a 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});
