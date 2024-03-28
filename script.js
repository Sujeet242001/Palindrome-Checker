function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}

function palindromeChecker() {
    const inputText = document.getElementById('inputText').value;
    const result = document.getElementById('result');
    if (isPalindrome(inputText)) {
        result.textContent = `"${inputText}" is a Palindrome`;
    } else {
        result.textContent = `"${inputText}" is not a Palindrome`;
    }
}

document.getElementById('checkButton').addEventListener('click', palindromeChecker);

// Note: Do not include parentheses after palindromeChecker in the addEventListener call
