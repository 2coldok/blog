// 입력값과 표적값의 일치율
//최소 70퍼 이상.

// export function calculateTitleMatchPercentage(nomalizeInput: string, nomalizeTitle: string): number {
//   const titleWords = nomalizeTitle.split('');
//   const inputWords = nomalizeInput.split('');
//   const matchedWordsInTitle = titleWords.filter((word) => inputWords.includes(word));
//   const matchedWordsInInput = inputWords.filter((word) => titleWords.includes(word));
  
//   const matchedPercentageOfInput = (matchedWordsInTitle.length / inputWords.length) * 100;
//   const matchedPercentageOfTitle = (matchedWordsInInput.length / titleWords.length) * 100;

//   return (matchedPercentageOfInput + matchedPercentageOfTitle ) / 200  * 100

// }

export function judgeTitleMatchByHuristic(normalizeInput: string, normalizeTitle: string): boolean {
  const titleWords = normalizeTitle.split('');
  const inputWords = normalizeInput.split('');
  const matchedWordsInTitle = titleWords.filter((word) => inputWords.includes(word));
  const matchedWordsInInput = inputWords.filter((word) => titleWords.includes(word));
  
  const matchedWordsLength = matchedWordsInTitle.length >= matchedWordsInInput.length ? matchedWordsInInput.length : matchedWordsInTitle.length;

  const matchedPercentageOfInput = (matchedWordsLength / inputWords.length) * 100;
  const matchedPercentageOfTitle = (matchedWordsLength / titleWords.length) * 100;
  
  const matchedPercentageOfTotal = (matchedPercentageOfInput + matchedPercentageOfTitle ) / 200  * 100;
  
  return normalizeTitle.includes(normalizeInput) || matchedPercentageOfTotal >= 75 || matchedPercentageOfInput >=85;
}

// todo
export function judgeTagMatchByHuristic(normalizeInput: string, normalizeTags: string[]): boolean {
  const inputWords = normalizeInput.split('');
  console.log(inputWords);
  
  return normalizeTags.some((tag) => tag.includes(normalizeInput))

}