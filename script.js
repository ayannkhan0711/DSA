// 6 write a function called countVowels that takes in a string and returns the number of vowel in a string

const str = "apple";

const countVowel = (str) => {
    let count = 0;

    let lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (
            lowerCaseStr[i] === "a" ||
            lowerCaseStr[i] === "e" ||
            lowerCaseStr[i] === "i" ||
            lowerCaseStr[i] === "o" ||
            lowerCaseStr[i] === "u"
        ) {
            count = count + 1;
        }
    }

    return count;
};

const result = countVowel(str);

console.log(result); // 2