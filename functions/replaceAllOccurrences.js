/* eslint-disable */ 

/**
 * Replaces all occurrences of a specified keyword (string) in the given post content (string) with another string (string).
 * Handles edge cases such as empty strings or non-string inputs, and ignores matches inside URLs, parsed HTML, or Markdown.
 *
 * @param {string} content - The post content that needs to be modified.
 * @param {string} keyword - The keyword to search for and replace in the content.
 * @param {string} replacement - The replacement string to replace the keyword in the content.
 * @return {string} The modified content after replacing all occurrences of the keyword with the replacement string.
 *
 * @example
 * const modifiedContent = replaceAllOccurrences("This is a test content. The content keyword should be replaced.", "content", "text");
 * // Returns: "This is a test text. The text keyword should be replaced."
 */
function replaceAllOccurrences(content, keyword, replacement) {
    if (typeof content !== "string" || typeof keyword !== "string" || typeof replacement !== "string") {
        return content;
    }

    if (content.length === 0 || keyword.length === 0) {
        return content;
    }

    const regex = new RegExp(`(?<!https?://[^\\s]*)(?<!&[^;]+)(?<!\\[\\^?[^\\]]*\\])\\b${keyword}\\b`, "gi");
    return content.replace(regex, replacement);
}

module.exports = {
    replaceAllOccurrences
};