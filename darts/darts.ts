export function score(x: number, y: number): number {
  const distanceToCenter = Math.sqrt(x ** 2 + y ** 2);

  if (distanceToCenter <= 1) {
    return 10;
  } else if (distanceToCenter <= 5) {
    return 5;
  } else if (distanceToCenter <= 10) {
    return 1;
  } else {
    return 0;
  }
}
