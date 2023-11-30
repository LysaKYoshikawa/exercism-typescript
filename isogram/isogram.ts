export const isIsogram = (wordIsograms: string): boolean => {
  const regexWord = wordIsograms.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return (
    regexWord
      .split("")
      .filter((value, index, newArrWord) => newArrWord.indexOf(value) === index)
      .length === regexWord.length
  );
};

