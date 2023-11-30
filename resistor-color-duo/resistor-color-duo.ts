export function decodedValue(colors: string[]): number {
  const colorValues: Record<string, number> = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };
  const [firstColor, secondColor] = colors.slice(0, 2);

  
  const value = colorValues[firstColor] * 10 + colorValues[secondColor];

  return value;
  
}
