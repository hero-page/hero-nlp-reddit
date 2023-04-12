/* eslint-disable */ 

/**
 * Analyzes the sentiment of a given post content and returns a sentiment score.
 *
 * @param {string} content - The post content to analyze.
 * @return {number} A sentiment score ranging from -1 (extremely negative) to 1 (extremely positive).
 *
 * @example
 * const sentimentScore = analyzePostSentiment("I love this product!");
 * console.log(sentimentScore); // Expected output: A number between -1 and 1
 */
function analyzePostSentiment(content) {
    // Initialize variables
    const positiveWords = ["love", "great", "amazing", "excellent", "awesome"];
    const negativeWords = ["hate", "terrible", "awful", "poor", "horrible"];
    const words = content.split(" ");

    // Count the positive and negative words
    let positiveCount = 0, negativeCount = 0;
    for (const word of words) {
        if (positiveWords.includes(word)) {
            positiveCount++;
        } else if (negativeWords.includes(word)) {
            negativeCount++;
        }
    }

    // Calculate sentiment score
    const totalWords = positiveCount + negativeCount;
    const sentimentScore = totalWords !== 0
        ? (positiveCount - negativeCount) / totalWords
        : 0;
    
    return sentimentScore;
}

module.exports = {
    analyzePostSentiment
};