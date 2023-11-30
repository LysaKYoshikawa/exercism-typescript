export const toRoman = (numero: number): string | number => {
  if (isNaN(numero)) return NaN;

  const inf = String(+numero).split("");
  const arrayRomanos = [
    "",
    "M",
    "MM",
    "MMM",
    "MMMIV",
    "MMMV",
    "MMMVI",
    "MMMVII",
    "MMMVIII",
    "MMMIX",
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];

  let romano = "";
  let sequencia = 4;
  while (sequencia-- && inf.length) {
    romano = (arrayRomanos[+inf.pop()! + sequencia * 10] || "") + romano;
  }

  return romano;
};

// // Exemplo de uso
// const resultado = toRoman(123);
// console.log(resultado);