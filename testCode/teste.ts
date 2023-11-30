function isPangram(pangram : string) {
  let isWordPangram = true
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const toGetherPangram = pangram.replace(/\s+/g, '');
  console.log(toGetherPangram.length, 'aqui aqui')
  
  

  // Converte todas as letras da frase para minúsculas
  const phraseInlowercase = pangram.toLowerCase();

  // Verifica se cada letra do alfabeto está presente na frase
  for (const word of alphabet) {
    if (phraseInlowercase.indexOf(word) === -1) {
      return false; // Se alguma letra não estiver presente, não é um pangrama
    }
  }
  if(toGetherPangram.length > 27 ){
    isWordPangram = false

  }
  if(/\d/.test(pangram)){
    isWordPangram = false
    
  }
  if (pangram === ''){
    isWordPangram = false
  }


  const letrasRepetidas = new Set<string>();  

  for (const char of pangram) {
    
    // Verifica se é uma letra
    if (/^[a-zA-Z]$/.test(char)) {
      // Verifica se a letra já foi encontrada antes
      
      if (letrasRepetidas.has(char)) {
        isWordPangram = false;
        break;
      }
    }
  }

  console.log(isWordPangram)

  return isWordPangram


}

isPangram('the quick brown 3 fox 4 jumps over the lazy dog');