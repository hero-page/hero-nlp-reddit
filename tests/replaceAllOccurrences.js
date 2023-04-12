/* eslint-disable */ 


        const {replaceAllOccurrences} = require("../functions/replaceAllOccurrences"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
   * Tests the replaceAllOccurrences function
   */
const testReplaceAllOccurrences = () => {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "replaceAllOccurrences";

    // Test 1: Normal case
    try {
        const result = replaceAllOccurrences("This is a test content. The content keyword should be replaced.", "content", "text");
        if (result === "This is a test text. The text keyword should be replaced.") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 2: Empty strings
    try {
        const result = replaceAllOccurrences("", "content", "text");
        if (result === "") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 3: Non-string input
    try {
        const result = replaceAllOccurrences(123, "content", "text");
        if (result === 123) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 4: No replacements needed
    try {
        const result = replaceAllOccurrences("This is a test sentence.", "content", "text");
        if (result === "This is a test sentence.") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 5: Ignore matches inside URLs
    try {
        const result = replaceAllOccurrences("Visit https://example.com/content for more content.", "content", "text");
        if (result === "Visit https://example.com/content for more text.") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 6: Case-sensitive replacement
    try {
        const result = replaceAllOccurrences("Content should be treated as case-sensitive and not replaced.", "content", "text");
        if (result === "Content should be treated as case-sensitive and not replaced.") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
};

module.exports = {
    testReplaceAllOccurrences
};