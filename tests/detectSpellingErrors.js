/* eslint-disable */ 


        const {detectSpellingErrors} = require("../functions/detectSpellingErrors"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}
/**
 * Test the "detectSpellingErrors" function.
 * It tests the following cases:
 * - Normal text with spelling errors.
 * - Text without spelling errors.
 * - Text with non-Latin characters.
 * - A very long text.
 * - Gibberish words mixed with regular text.
 * - URLs and Markdown syntax are ignored.
 */
function testDetectSpellingErrors() {
    const name_of_function = "detectSpellingErrors";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    // Normal text with spelling errors
    try {
        const text1 = "This is an exmple text with sme spleling erors";
        const result1 = detectSpellingErrors(text1);
        if (result1.typoCount === 3 && result1.formattedText === "This is an <mark>exmple</mark> text with <mark>sme</mark> <mark>spleling</mark> erors") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Text without spelling errors
    try {
        const text2 = "This is an example text without spelling errors";
        const result2 = detectSpellingErrors(text2);
        if (result2.typoCount === 0 && result2.formattedText === text2) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Text with non-Latin characters
    try {
        const text3 = "こんにちは、これは試しの文です";
        const result3 = detectSpellingErrors(text3);
        if (result3.typoCount === 0 && result3.formattedText === text3) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // A very long text
    try {
        const text4 = "Lorem ipsum dolor sit amet..."; // Replace with a very long text
        const result4 = detectSpellingErrors(text4);
        // Assuming correct typoCount and formattedText, based on the provided long text:
        if (result4.typoCount === 7 && result4.formattedText === "...") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Gibberish words mixed with regular text
    try {
        const text5 = "This is some dshglkfahg jldkaoreh text";
        const result5 = detectSpellingErrors(text5);
        if (result5.typoCount === 2 && result5.formattedText === "This is some <mark>dshglkfahg</mark> <mark>jldkaoreh</mark> text") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // URLs and Markdown syntax are ignored
    try {
        const text6 = "The [example](https://example.com) is here";
        const result6 = detectSpellingErrors(text6);
        if (result6.typoCount === 0 && result6.formattedText === text6) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Call the helper function to add the test results to the README file
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testDetectSpellingErrors
};
