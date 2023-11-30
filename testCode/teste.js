
"use strict";
const colorCode = (color) => {
    console.log('aqui')
    const colorIndex = COLORS.indexOf(color.toLowerCase());
    if (colorIndex === -1) {
        throw new Error(`Invalid color: ${color}`);
    }
    console.log(colorIndex, 'esse numero');
    return colorIndex;
};
const COLORS = [
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
