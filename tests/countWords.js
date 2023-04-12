/* eslint-disable */ 


        const {countWords} = require("../functions/countWords"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}  /**
 * Test function for countWords.
 */
function testCountWords() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;

    const nameOfFunction = "countWords";

    // Test case 1: Normal use case, should return correct word count
    try {
        const postContent = "Hello, world! This is a test post -- please ignore.";
        const expectedResult = 9;
        if (countWords(postContent) === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
      numberOfTestsFailed++;
    }
    
    // Test case 2: With 'ignorePunctuations' flag, should return correct word count
    try {
        const postContent = "Hello, world! This is a test post -- please ignore.";
        const expectedResult = 8;
        if (countWords(postContent, true) === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
      numberOfTestsFailed++;
    }

    // Test case 3: Empty string, should return 0
    try {
        const postContent = "";
        const expectedResult = 0;
        if (countWords(postContent) === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
      numberOfTestsFailed++;
    }

    // Test case 4: String with only spaces, should return 0
    try {
        const postContent = "     ";
        const expectedResult = 0;
        if (countWords(postContent) === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
      numberOfTestsFailed++;
    }

    // Call addToReadme with the generated test badge
    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testCountWords
};