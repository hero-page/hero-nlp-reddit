const {testAnalyzePostSentiment} = require('./tests/analyzePostSentiment.js');
const {testCheckKeywordsDensity} = require('./tests/checkKeywordsDensity.js');
const {testCountWords} = require('./tests/countWords.js');
const {testDetectSpellingErrors} = require('./tests/detectSpellingErrors.js');
const {testGeneratePostTitle} = require('./tests/generatePostTitle.js');
const {testReplaceAllOccurrences} = require('./tests/replaceAllOccurrences.js');

testAnalyzePostSentiment();
testCheckKeywordsDensity();
testCountWords();
testDetectSpellingErrors();
testGeneratePostTitle();
testReplaceAllOccurrences();