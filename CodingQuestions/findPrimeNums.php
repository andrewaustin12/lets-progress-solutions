<?php

function findPrimeNums($n) {
    $primes = array();
    
    // Handle special cases
    if ($n >= 2) {
        $primes[] = 2;
    }
    
    // Check odd numbers starting from 3
    for ($i = 3; $i <= $n; $i += 2) {
        $isPrime = true;
        $sqrt = sqrt($i);
        
        // Check if $i is divisible by any previous prime numbers
        foreach ($primes as $prime) {
            if ($prime > $sqrt) {
                break; // No need to check further
            }
            
            if ($i % $prime == 0) {
                $isPrime = false;
                break; // $i is not prime
            }
        }
        
        if ($isPrime) {
            $primes[] = $i;
        }
    }
    
    return $primes;
}

$n = 40; // Change this to the desired value of 'n'
$primeArray = findPrimeNums($n);

foreach ($primeArray as $prime) {
    echo $prime . "  is a primenumber.\n";
}

?>