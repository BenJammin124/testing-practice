export function cap(str) {
  const letter = str.charAt(0).toUpperCase();
  const rest = str.slice(1);
  return letter + rest;
}
