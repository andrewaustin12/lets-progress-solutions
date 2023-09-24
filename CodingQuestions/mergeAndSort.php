<?php

function mergeAndSort($array) {
    $count = count($array);
    
    if ($count <= 1) {
        return $array;
    }
    
    $mid = (int)($count / 2);
    $left = array_slice($array, 0, $mid);
    $right = array_slice($array, $mid);
    
    $left = mergeAndSort($left);
    $right = mergeAndSort($right);
    
    return merge($left, $right);
}

function merge($left, $right) {
    $result = array();
    
    while (!empty($left) && !empty($right)) {
        if ($left[0] < $right[0]) {
            $result[] = array_shift($left);
        } else {
            $result[] = array_shift($right);
        }
    }
    
    while (!empty($left)) {
        $result[] = array_shift($left);
    }
    
    while (!empty($right)) {
        $result[] = array_shift($right);
    }
    
    return $result;
}

// Example usage:
$unsortedArray = [12, 11, 13, 5, 6, 7];
$sortedArray = mergeAndSort($unsortedArray);

echo "Original Array: " . implode(", ", $unsortedArray) . PHP_EOL;
echo "Sorted Array: " . implode(", ", $sortedArray) . PHP_EOL;

?>
