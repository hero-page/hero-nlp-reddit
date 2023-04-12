/* eslint-disable */ 

/**
 * Generates an optimized title for a post by combining keywords and current trends.
 *
 * @param {string[]} keywords - The keywords to include in the post title.
 * @param {string[]} trends - The trends to include in the post title.
 * @param {string} delimiter - The delimiter to use for joining keywords and trends.
 * @return {string} The generated post title.
 * @example
 * const keywords = ['technology', 'programming'];
 * const trends = ['Machine Learning', 'Blockchain'];
 * const delimiter = ' | ';
 * generatePostTitle(keywords, trends, delimiter);
 * // Output: 'technology | Machine Learning | programming | Blockchain'
 */
function generatePostTitle(keywords, trends, delimiter) {
    const sanitizedKeywords = keywords
        .filter(keyword => keyword.length <= 100)
        .map(keyword => keyword.replace(/[^\w\s]/gi, '').trim());
    const sanitizedTrends = trends
        .filter(trend => trend.length <= 100)
        .map(trend => trend.replace(/[^\w\s]/gi, '').trim());
    const postTitle = [...sanitizedKeywords, ...sanitizedTrends].join(delimiter);
    return postTitle;
}

module.exports = {
    generatePostTitle
};