//1. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//---------------------------------------------------------------------------------------------------------

// function likes(names) {
//    const length = names.length;

//    if (length === 0) {
//      return "no one likes this";
//    } else if (length === 1) {
//      return `${names[0]} likes this`;
//    } else if (length === 2) {
//      return `${names[0]} and ${names[1]} like this`;
//    } else if (length === 3) {
//      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//    } else {
//      const othersCount = length - 2;
//      return `${names[0]}, ${names[1]} and ${othersCount} others like this`;
//    }
//  }
//  console.log(likes([]));
//  console.log(likes(["Peter"]));
//  console.log(likes(["Jacob", "Alex"]));
//  console.log(likes(["Max", "John", "Mark"]));
//  console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

/*------------------------------------------------------------------------------------------------------*/

//2. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//---------------------------------------------------------------------------------------------------------

// function isIsogram(str) {
//   const lowerStr = str.toLowerCase();

//   const letterSet = new Set();

//   for (const char of lowerStr) {
//     if (letterSet.has(char)) {
//       return false;
//     }

//     letterSet.add(char);
//   }

//   return true;
// }
// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("moose"));
// console.log(isIsogram("aba"));

/*------------------------------------------------------------------------------------------------------*

//3. Simple, given a string of words, return the length of the shortest word(s).             

// String will never be empty and you do not need to account for different data types.

//---------------------------------------------------------------------------------------------------------

// function findShort(s) {
//   const words = s.split(" ");

//   let minLength = Infinity;

//   for (const word of words) {
//     const wordLength = word.length;
//     if (wordLength < minLength) {
//       minLength = wordLength;
//     }
//   }

//   return minLength;
// }

// console.log(findShort("Simple, given a string of words"));
// console.log(findShort("return the length of the shortest word(s)"));
// console.log(findShort("String will never be empty"));

/*------------------------------------------------------------------------------------------------------*/

//4. Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

//---------------------------------------------------------------------------------------------------------

// function divisors(n) {
//   const result = [];

//   for (let i = 2; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       result.push(i);
//     }
//   }

//   return result.length ? result : `${n} is prime`;
// }

// console.log(divisors(12));
// console.log(divisors(25));
// console.log(divisors(13));

/*------------------------------------------------------------------------------------------------------*/

//5. Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//---------------------------------------------------------------------------------------------------------

// function getCount(str) {
//   let count = 0;

//   const lowerStr = str.toLowerCase();

//   for (let i = 0; i < lowerStr.length; i++) {
//     const char = lowerStr[i];
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(getCount("hello"));
// console.log(getCount("world"));
// console.log(getCount("aeiou"));

/*------------------------------------------------------------------------------------------------------*/

//6. You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//---------------------------------------------------------------------------------------------------------

// function findNextSquare(sq) {
//   const sqrt = Math.sqrt(sq);
//   if (Number.isInteger(sqrt)) {
//     const nextPerfectSquare = Math.pow(sqrt + 1, 2);
//     return nextPerfectSquare;
//   } else {
//     return -1;
//   }
// }

// console.log(findNextSquare(121));
// console.log(findNextSquare(625));
// console.log(findNextSquare(114));

/*------------------------------------------------------------------------------------------------------*/

//7. Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

//---------------------------------------------------------------------------------------------------------

// function seriesSum(n) {
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += 1 / (3 * i + 1);
//   }

//   return sum.toFixed(2);
// }

// console.log(seriesSum(1));
// console.log(seriesSum(2));
// console.log(seriesSum(3));

/*------------------------------------------------------------------------------------------------------*/

//8. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//---------------------------------------------------------------------------------------------------------

// function getSum(a, b) {
//   if (a > b) {
//     [a, b] = [b, a];
//   }

//   let sum = 0;

//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(1, 0));
// console.log(getSum(1, 2));
// console.log(getSum(0, 1));
// console.log(getSum(1, 1));
// console.log(getSum(-1, 0));
// console.log(getSum(-1, 2));

/*------------------------------------------------------------------------------------------------------*/

//9. Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//---------------------------------------------------------------------------------------------------------

// function reverseWords(str) {
//   const words = str.split(" ");

//   const reversedWords = words.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   return reversedWords.join(" ");
// }

// console.log(reverseWords("This is an example!"));
// console.log(reverseWords("double  spaces"));

/*------------------------------------------------------------------------------------------------------*/

//10. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//---------------------------------------------------------------------------------------------------------

// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// console.log(isTriangle(3, 4, 5));
// console.log(isTriangle(1, 1, 3));
// console.log(isTriangle(5, 5, 5));
