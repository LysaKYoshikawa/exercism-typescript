export function hey(message: string): string {
  // Remover espaços em branco no início e no final da mensagem
  const trimmedMessage = message.trim();

  // Verificar se a mensagem está vazia
  if (trimmedMessage === '') {
    return 'Fine. Be that way!';
  }

  // Verificar se a mensagem é um grito (contém letras e todas estão em maiúsculas)
  const isShouting = /[A-Z]/.test(trimmedMessage) && trimmedMessage === trimmedMessage.toUpperCase();

  // Verificar se a mensagem é uma pergunta (termina com '?')
  const isQuestion = trimmedMessage.endsWith('?');

  if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (isShouting) {
    return 'Whoa, chill out!';
  } else if (isQuestion) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
}
