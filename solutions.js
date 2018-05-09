// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}
// document.write(highestAndLowest("1 2 3 4 5"))
