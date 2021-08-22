import { isNumeric } from "../number.helpers";

describe("Number Helpers", () => {
  it("correctly identifies integer strings", () => {
    const result = isNumeric("5");
    expect(result).toBe(true);
  });

  it("correctly identifies float strings", () => {
    const result = isNumeric("5.1");
    expect(result).toBe(true);
  });
});
