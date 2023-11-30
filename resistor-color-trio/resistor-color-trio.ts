export function decodedResistorValue(colors: string[]): string {
  const colorValues: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  if (colors.length < 3) {
    throw new Error('At least three colors are required');
  }

  const [firstColor, secondColor, multiplierColor] = colors;

  const value =
    colorValues[firstColor] * 10 + colorValues[secondColor];

  const multiplier = Math.pow(10, colorValues[multiplierColor]);

  const totalOhms = value * multiplier;

  if (totalOhms >= 1e9) {
    return `${(totalOhms / 1e9).toFixed(0)} gigaohms`;
  } else if (totalOhms >= 1e6) {
    return `${(totalOhms / 1e6).toFixed(0)} megaohms`;
  } else if (totalOhms >= 1e3) {
    return `${(totalOhms / 1e3).toFixed(0)} kiloohms`;
  } else {
    return `${totalOhms.toFixed(0)} ohms`;
  }
}



