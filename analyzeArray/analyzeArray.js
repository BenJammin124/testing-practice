function analyzeArray(arr) {
  const sum = arr.reduce((prev, current) => {
    // let result =
    return prev + current;
  });
  const avg = sum / arr.length;
  return {
    average: avg,
    length: arr.length,
    max: arr.reduce((a, b) => Math.max(a, b)),
    min: arr.reduce((a, b) => Math.min(a, b)),
  };
}

export default analyzeArray;
