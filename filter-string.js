const string = "САЛЮТ! Что происходит?";

const vowels = ["у", "е", "ы", "а", "о", "э", "я", "и", "ю", "ё" ];

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }

    return extractedVowels;
}

console.log(getVowels(string));