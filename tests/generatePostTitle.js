/* eslint-disable */ 


        const {generatePostTitle} = require("../functions/generatePostTitle"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for generatePostTitle()
 */
function testGeneratePostTitle() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "generatePostTitle";

    const keywords = ["technology", "programming"];
    const trends = ["Machine Learning", "Blockchain"];
    const delimiter = " | ";

    try {
        const result = generatePostTitle(keywords, trends, delimiter);
        if (result === "technology | Machine Learning | programming | Blockchain") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = generatePostTitle([], [], delimiter);
        if (result === "") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = generatePostTitle(keywords, [], delimiter);
        if (result === "technology | programming") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = generatePostTitle([], trends, delimiter);
        if (result === "Machine Learning | Blockchain") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const longKeyword = "a".repeat(101);
        const result = generatePostTitle([longKeyword], trends, delimiter);
        if (result === "Machine Learning | Blockchain") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const specialCharsKeyword = " [email protected]#$";
        const result = generatePostTitle([specialCharsKeyword], trends, delimiter);
        if (result === "Machine Learning | Blockchain") {
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
    testGeneratePostTitle
};