import { calculator } from "./calc";

describe("calculator", () => {
  test("should be defined", () => {
    expect(calculator).toBeDefined();
  });

  test("method should return the sum of two numbers", () => {
    expect(calculator.add(2, 5)).toBe(7);
  });

  test("method should return the difference btwn two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
    expect(calculator.subtract(-3, -3)).toBe(0);
  });

  test("multiplies two numbers; returns product", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
    expect(calculator.multiply(0, 5)).toBe(0);
    expect(calculator.multiply(1, 5)).toBe(5);
  });

  test("divides two numbers; returns quotient", () => {
    const testCases = [
      {
        divisor: 3,
        dividend: 15,
        expected: 5,
      },
      {
        divisor: 2,
        dividend: 10,
        expected: 5,
      },
      {
        divisor: 15,
        dividend: 5,
        expected: 1 / 3,
      },
    ];

    testCases.forEach((t) => {
      const actual = calculator.divide(t.dividend, t.divisor);
      expect(actual).toBe(t.expected);
    });

    // expect(calculator.divide(15, 3)).toBe(5);
    // expect(calculator.divide(10, 2)).toBe(5);
    // expect(calculator.divide(5, 15)).toBeLessThan(1);
  });
});
