<?php

function isAPalindrome($str) {
    // Remove non-alphanumeric characters and convert to lowercase
    $cleanedStr = strtolower(preg_replace("/[^A-Za-z0-9]/", '', $str));
    
    // Compare the original string with its reverse
    return $cleanedStr === strrev($cleanedStr);
}

// Function to test the palindrome checker
function testIsAPalindrome($inputString) {
    if (isAPalindrome($inputString)) {
        echo "The string '$inputString' is a palindrome." . PHP_EOL;
    } else {
        echo "The string '$inputString' is not a palindrome." . PHP_EOL;
    }
}

// Test cases
$input1 = "A man, a plan, a canal, Panama";
$input2 = "racecar";
$input3 = "Hello, World!";
$input4 = "Was it a car or a cat I saw?";
$input5 = "No lemon, no melon";

testIsAPalindrome($input1);
testIsAPalindrome($input2);
testIsAPalindrome($input3);
testIsAPalindrome($input4);
testIsAPalindrome($input5);

?>