/* eslint-disable */ 


        const {analyzePostSentiment} = require("../functions/analyzePostSentiment"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for analyzing post sentiment.
 * Counts the number of tests passed and failed, and generates a test badge for README.
 */
function testAnalyzePostSentiment() {
    const name_of_function = "analyzePostSentiment";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const positiveTest = analyzePostSentiment("I love this product! It is amazing!");
        if (positiveTest > 0) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const negativeTest = analyzePostSentiment("I hate this product. It is terrible!");
        if (negativeTest < 0) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const neutralTest = analyzePostSentiment("This product is just average. Not good or bad.");
        if (neutralTest === 0) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const extremeLanguageTest = analyzePostSentiment("사랑해요 좋아요"); // Korean phrase meaning "I love it, I like it"
        if (extremeLanguageTest === 0) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testAnalyzePostSentiment
};