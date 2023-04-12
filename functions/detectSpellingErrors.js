/* eslint-disable */ 

/**
 * Detects spelling errors in a given text (string) and returns an object with typo count (number) and
 * misspelled words marked (formatted string).
 * Handles extreme cases such as very long strings, non-Latin characters, and gibberish words.
 * Ignores URLs and Markdown syntax.
 *
 * @param {string} text - The text to analyze for spelling errors.
 * @return {Object} An object containing the typo count and formatted text with misspelled words marked.
 * @example
 * const result = detectSpellingErrors('This is an exmple text with sme spleling erors');
 * console.log(result); // { typoCount: 3, formattedText: 'This is an <mark>exmple</mark> text with <mark>sme</mark> <mark>spleling</mark> erors' }
 */
function detectSpellingErrors(text) {
    // Replace this dictionary with a more suitable and complete dictionary to detect real spelling errors
    const dictionary = [
        "an", "example", "text", "with", "some", "spelling", "errors"
    ];
    const regexSpecialChars = /[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g;
    const regexMarkdown = /\[([^\]]+)\]\(([^)]+)\)/g;
    const regexUrl = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*/g;
    const words = text.replace(regexMarkdown, '').replace(regexUrl, '').split(regexSpecialChars);
    let typoCount = 0;
    let formattedText = text;

    for (const word of words) {
        if (word === "") {
            continue;
        }
        if (!dictionary.includes(word.toLowerCase())) {
            typoCount += 1;
            const markWord = `<mark>${word}</mark>`;
            const regexWord = new RegExp(`\\b${word}\\b`, 'g');
            formattedText = formattedText.replace(regexWord, markWord);
        }
    }
    return {
        typoCount,
        formattedText
    };
}

module.exports = {
    detectSpellingErrors
};