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
  // const inputWords = normalizeInput.split('');
  
  
  return normalizeTags.some((tag) => tag.includes(normalizeInput))

}

// input: 'Appple Melon 3개먹기' output: 'applemelon3개먹기'
export function getNormalizeStringInput(input: string): string {
  return input.trim().split(" ").join("").toLowerCase();
}

//input : #태그A1#태그CD2 output: ['태그a1', '태그cd2']
export function getNormalizeTagBundle(milestoneTitle: string | undefined): string[] {
  if (milestoneTitle !== undefined) {
    return milestoneTitle
      .split("#")
      .filter(Boolean)
      .map((tag) => getNormalizeStringInput(tag));
  }
  return [""];
}
// input : #태그1Aa#태그K output: ['태그1Aa', '태그K']
// 원본을 유지하며 배열로 반환.
export function getTags(milestoneTitle: string | undefined): string[] {
  if (milestoneTitle != undefined) {
    return milestoneTitle.split('#').filter(Boolean).map((tag) => tag.trim());
  }
  return [''];
}

//
export function getAccentedTarget(input: string, target: string, accentColor: string): string {
  const array = input.split("").map((element, index) => {
    if (index !== input.length - 1) {
      return element + `\\s*`;
    }
    return element;
  });

  const regPrep = array.join("");
  const re = new RegExp(regPrep, "i");

  const matchResult = target.match(re);
  if (matchResult === null) {
    return target;
  }
  // rgb(80, 255, 82)
  return target.replace(matchResult[0], `<span style="color: ${accentColor};">${matchResult}</span>`);
}
