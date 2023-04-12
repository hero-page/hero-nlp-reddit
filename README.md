
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



```
# Hero NLP Reddit

A set of natural language processing functions for generating and optimizing Reddit post content.

## Features

1. **generatePostTitle**: Generates an optimized title for a post by combining keywords and current trends. Takes keywords (string array), trends (string array), and a delimiter (string) as input. Handles the case when input arrays are empty or have special characters, ignores keywords that are very long (more than 100 characters).

2. **detectSpellingErrors**: Detects spelling errors in a given text (string). Returns an object with typo count (number) and misspelled words marked (formatted string). Handles extreme cases such as very long strings, non-Latin characters, and gibberish words. Ignores URLs and Markdown syntax.

3. **analyzePostSentiment**: Analyzes the sentiment of a given post content (string). Returns a sentiment score (number) ranging from -1 (extremely negative) to 1 (extremely positive). Handles extreme cases such as multiple languages, slang, and shortened words, but ignores sarcasm, emojis, and URLs.

4. **countWords**: Counts the number of words in a given post content (string). Returns the word count (number). Takes an optional parameter (boolean) to count words exactly without considering punctuations and ignores the '--' separator used for comments in Reddit.

5. **checkKeywordsDensity**: Checks the keywords density in a given post content (string) for a provided list of keywords (string array). Returns an array of objects with keyword (string), frequency (number), and density (number percentage). Ignores words that are part of a URL, parsed HTML or Markdown, and considers different forms of the keyword (case-insensitive).

6. **replaceAllOccurrences**: Replaces all occurrences of a specified string or keyword (string) in the given post content (string) with another string (string). Returns the modified content (string). Handles edge cases such as empty strings or non-string inputs, and ignores matches inside URLs, parsed HTML or Markdown.

7. **generateSummary**: Generates a brief summary of a given post content (string) in a specified length (number). Returns the summary (string). Handles long text, bullet points, and numbered lists. Ignores quotes, code blocks, and items within brackets. Supports multilingual content and markdown syntax.

8. **splitTextIntoParagraphs**: Splits a given post content (string) into paragraphs using specified delimiter (string) and returns the paragraphs (string array). Removes empty paragraphs, handles multiline strings, and ignores content within quotes, Markdown structures, and code blocks. Respects the original formatting for lists and tables.

## Author

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)
```
                

### Tests for analyzePostSentiment

![analyzePostSentiment](https://img.shields.io/badge/analyzePostSentiment()-4%20passed%2C%200%20failed.-13b285)

### Tests for generatePostTitle

![generatePostTitle](https://img.shields.io/badge/generatePostTitle()-4%20passed%2C%202%20failed.-ff69b4)

### Tests for replaceAllOccurrences

![replaceAllOccurrences](https://img.shields.io/badge/replaceAllOccurrences()-5%20passed%2C%201%20failed.-ff69b4)

### Tests for countWords

![countWords](https://img.shields.io/badge/countWords()-1%20passed%2C%203%20failed.-ff69b4)

### Tests for checkKeywordsDensity

![checkKeywordsDensity](https://img.shields.io/badge/checkKeywordsDensity()-0%20passed%2C%203%20failed.-ff69b4)

### Tests for detectSpellingErrors

![detectSpellingErrors](https://img.shields.io/badge/detectSpellingErrors()-0%20passed%2C%206%20failed.-ff69b4)