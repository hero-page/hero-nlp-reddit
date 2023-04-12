/* eslint-disable */ 


        const {checkKeywordsDensity} = require("../functions/checkKeywordsDensity"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for checkKeywordsDensity()
 */
function testCheckKeywordsDensity() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "checkKeywordsDensity";

    try {
        const postContent = "Hello world! This is a sample post. Visit https://example.com";
        const keywords = ["world", "sample"];
        const expectedResult = [
            { keyword: "world", frequency: 1, density: 16.67 },
            { keyword: "sample", frequency: 1, density: 16.67 }
        ];

        const result = checkKeywordsDensity(postContent, keywords);

        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const postContent = "<p>Check markdown *keywords* density with _urls_.</p>";
        const keywords = ["markdown", "density", "urls"];
        const expectedResult = [
            { keyword: "markdown", frequency: 1, density: 25 },
            { keyword: "density", frequency: 1, density: 25 },
            { keyword: "urls", frequency: 1, density: 25 }
        ];

        const result = checkKeywordsDensity(postContent, keywords);

        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const postContent = "Hello world! world has hello WORLD";
        const keywords = ["hello", "world"];
        const expectedResult = [
            { keyword: "hello", frequency: 1, density: 16.67 },
            { keyword: "world", frequency: 3, density: 50 },
        ];

        const result = checkKeywordsDensity(postContent, keywords);

        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testCheckKeywordsDensity
};