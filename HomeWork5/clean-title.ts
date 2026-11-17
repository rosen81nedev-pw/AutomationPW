//At first create the title and trimmed it in new variable. Print it.
const myTitle: string = "   broken STREET light   ";
const titleTrimmed = myTitle.trim();

console.log(titleTrimmed);

//Create a new variable in lower case and print it
const titleLower = titleTrimmed.toLowerCase();

console.log(titleLower);

 //Create a new variable in upper case and print it
 const titleUpper = titleTrimmed.toUpperCase();

 console.log(titleUpper);

//Create a new variable capitalized and print it
const titleCapitalized = titleLower.charAt(0).toUpperCase() + titleLower.slice(1);

console.log(titleCapitalized);

//Check if string exists in string
console.log('The word is "street": ${titelLower.includes("street")}');

//Replace a word in the string
const titleReplace = titleLower.replace("street", "road");

console.log(titleReplace);