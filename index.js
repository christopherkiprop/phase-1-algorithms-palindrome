function isPalindrome(word) {
  // Write your algorithm here
  // index.js

function isPalindrome(str) {
  // Convert the string to lowercase to handle case insensitivity
  str = str.toLowerCase();
  
  // Use two pointers approach to check palindrome
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // If characters do not match, it's not a palindrome
    }
    left++;
    right--;
  }
  
  return true; // If all characters match, it's a palindrome
}

module.exports = isPalindrome;

}

/* 
  Add your pseudocode here
*/
function isPalindrome(str):
    // Convert the string to lowercase to handle case insensitivity
    str = str.toLowerCase()
    
    // Initialize two pointers
    left = 0
    right = length of str - 1
    
    // Loop until the pointers meet
    while left < right:
        // Check if characters at left and right pointers are equal
        if str[left] is not equal to str[right]:
            return false // Not a palindrome
        
        // Move the pointers towards the center
        left = left + 1
        right = right - 1
    
    // If the loop completes without finding mismatches, it's a palindrome
    return true

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
