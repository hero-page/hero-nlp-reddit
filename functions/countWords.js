/* eslint-disable */ 

/**
 * Counts the number of words in a given post content (string).
 *
 * @param {string} content - The post content to count words in.
 * @param {boolean} [ignorePunctuations=false] - Optional parameter to count words exactly without considering punctuations.
 * @return {number} The word count of the post content.
 *
 * @example
 * const postContent = "Hello, world! This is a test post -- please ignore.";
 * const wordCount = countWords(postContent, true);
 * console.log(wordCount); // Output: 8
 */
function countWords(content, ignorePunctuations = false) {
    if (ignorePunctuations) {
        content = content.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    }

    const words = content.split(/\s+/);
    let count = 0;
    for (const word of words) {
        if (word !== "--") {
            count++;
        }
    }

    return count;
}

module.exports = {
    countWords
};