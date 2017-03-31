export default function normalize (numbers) {
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  const denominator = max - min
  return numbers.map(n => (n - min) / denominator)
}
