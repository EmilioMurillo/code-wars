// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}
// document.write(highestAndLowest("1 2 3 4 5"))


You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  var middleLetters = '';
    if(string.length % 2 === 0){
      var even =string.length /2;
      return string.slice(even -1, even + 1);
}if (string.length % 2 !== 0){
    var odd = string.charAt((string.length/2))
    return odd;
  });
});


Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona

function spinWords(words){
    words = words.split(' ');
    for(var i=0, item; item=words[i]; i++) {
        if(item.length >=5) words[i] = item.split('').reverse().join('');
    }
    return words.join(' ');
}
