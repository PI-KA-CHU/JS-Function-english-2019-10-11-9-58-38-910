// function1
function reverseString(message){
  // wirte your code here
  return message.split("").reverse().join("")
}
reverseString('hello'); // should return 'olleh'


//function2
function palindrome(message){
  // wirte your code here
  var left = 0;
  var right = message.length - 1;

  while(left <= right){
  	if (message[left] != message[right]) {
  		return false;
  	}
  	left ++;
  	right --;
  }
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true


//function3
function alphabetSort(message){
  // wirte your code here
  return message.split("").sort().join("");
}
alphabetSort('hello'); // should return 'ehllo'


//function4
function countWords(message){
  // wirte your code here
  var count = 0;
  for (var i = 0; i < message.length; i++) {
  	if (alphabet(message[i]) && (i == message.length - 1 || !alphabet(message[i+1]))) {
  		count ++;
  	}
  }
  return count;
}
function alphabet(letter){
	if (letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z') {
		return true;
	}
	return false;
}

countWords('Good morning, I love JavaScript.'); // should return 5