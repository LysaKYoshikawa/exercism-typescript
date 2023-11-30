export function isPangram(pangram : string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const fraseEmMinusculas = pangram.toLowerCase();

  const letrasFiltradas = fraseEmMinusculas.match(/[a-z]/g);
  const letrasUnicas = new Set(letrasFiltradas);

  for (const letra of alphabet) {
    if(/\d/.test(pangram)){
      return false;

    }
    if (!letrasUnicas.has(letra)) {
      return false;
    }
  }

  return true;
}
