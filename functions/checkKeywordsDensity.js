/* eslint-disable */ 

/**
 * Checks the keywords density in a given post content (string) for a provided list of keywords (string array).
 * Returns an array of objects with keyword (string), frequency (number), and density (number percentage).
 * Ignores words that are part of a URL, parsed HTML or Markdown, and considers different forms of the
 * keyword (case-insensitive).
 *
 * @param {string} postContent - The content of the post as a string.
 * @param {string[]} keywords - Array of keywords to check density.
 * @return {Object[]} An array of objects with keyword, frequency, and density.
 * @example
 * // checkKeywordsDensity("Hello world! This is a sample post.", ["world", "sample"])
 * // returns [{ keyword: 'world', frequency: 1, density: 16.67 }, { keyword: 'sample', frequency: 1, density: 16.67 }]
 */
function checkKeywordsDensity(postContent, keywords) {
    // Remove URLs, HTML tags, and Markdown
    const contentWithoutUrls = postContent.replace(/https?:\/\/[^ ]+/gi, "");
    const contentWithoutTags = contentWithoutUrls.replace(/<[^>]*>|(?:\r?\n|\r)|\*|\_/g, "");

    // Normalize text to lowercase and split into words
    const words = contentWithoutTags.toLowerCase().split(/\s+/);

    // Initialize an empty results array
    const densityResults = [];

    // Iterate through the list of keywords
    for (const keyword of keywords) {
        const keywordLowerCase = keyword.toLowerCase();
        let frequency = 0;

        for (const word of words) {
            if (word === keywordLowerCase) {
                frequency++;
            }
        }

        // Calculate keyword density
        const density = (frequency / words.length) * 100;

        // Add result to densityResults array
        densityResults.push({ keyword, frequency, density });
    }

    return densityResults;
}

module.exports = {
    checkKeywordsDensity
};