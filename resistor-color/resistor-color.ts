export const colorCode = (color: string): number => {
  const colorIndex = COLORS.indexOf(color.toLowerCase());
  if (colorIndex === -1) {
    throw new Error(`Invalid color: ${color}`);
  }
  return colorIndex;
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];


