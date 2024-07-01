import { reverse } from "./reverse";

test("takes string and reverses it", () => {
  expect(reverse("halo")).toBe("olah");
});
