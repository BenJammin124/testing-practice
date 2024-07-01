import caesarCipher from "./caesarCipher";

describe("#caesarCipher()", () => {
  test("basic shift w/o wrap", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("shift w/ wrap", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("shift with CAP letters", () => {
    expect(caesarCipher("Ben", 3)).toBe("Ehq");
  });

  test("shift with punctuation/spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("negative shift", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });
});
