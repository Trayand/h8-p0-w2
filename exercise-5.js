// 1. Let's form a sentences

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
console.log('\n');



// 2. Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; 
var thirdWord =  word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First word : ' + firstWord);
console.log('Second word : ' + secondWord);
console.log('Third word : ' + thirdWord);
console.log('Fourth word : ' + fourthWord);
console.log('Fifth word : ' + fifthWord);
console.log('\n');



// 3. Breaking Sentence (Again) using Substring

var word = 'wow JavaScript is so cool';
var firstWord = word.substr(0,3);
var secondWord = word.substr(4,10); 
var thirdWord =  word.substr(15,2);
var fourthWord = word.substr(18,2);
var fifthWord = word.substr(21,4);

console.log('First word : ' + firstWord);
console.log('Second word : ' + secondWord);
console.log('Third word : ' + thirdWord);
console.log('Fourth word : ' + fourthWord);
console.log('Fifth word : ' + fifthWord);
console.log('\n');


// 4. Breaking Sentence (yet Again) and Count Each Length

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

console.log('First word : ' + firstWord + ', with length ' + firstWordLength);
console.log('Second word : ' + secondWord + ', with length ' + secondWordLength);
console.log('Third word : ' + thirdWord + ', with length ' + thirdWordLength);
console.log('Fourth word : ' + fourthWord + ', with length ' + fourthWordLength);
console.log('Fifth word : ' + fifthWord + ', with length ' + fifthWordLength);
console.log('\n');