import analyzeArray from "./analyzeArray";

describe("#analyzeArray() returns object w/average, min, max, length", () => {
  test("1, 2, 3, 4", () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    });
  });

  test("returns correct object", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
