export function formatDuration(target: string | number) {
  const [s = 0, m = 0, h = 0] = String(target).split(':').map(Number).reverse();
  const seconds = String(target).endsWith('000')
    ? s / 1000
    : s + m * 60 + h * 3600;

  return [
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    Math.round(seconds % 60),
  ]
    .map((e) => String(e).padStart(2, '0'))
    .join(':');
}
