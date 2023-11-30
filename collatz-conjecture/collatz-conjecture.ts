export function steps(num: number): number {
  // Verifica se o número é um inteiro positivo
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error('Only positive integers are allowed');
  }

  // Inicializa a contagem de passos
  let stepsCount = 0;

  // Executa o loop até que o número atinja 1
  while (num !== 1) {
    // Verifica se o número é par
    if (num % 2 === 0) {
      // Se o número é par, divide por 2
      num = num / 2;
    } else {
      // Se o número é ímpar, multiplica por 3 e soma 1
      num = num * 3 + 1;
    }

    // Incrementa a contagem de passos
    stepsCount++;
  }

  // Retorna o total de passos
  return stepsCount;
}
