import { cap } from "./capitalize";

test("takes string and capitalizes the first letter", () => {
  expect(cap("milo")).toBe("Milo");
});
