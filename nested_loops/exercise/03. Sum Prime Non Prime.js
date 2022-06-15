function sumPrimeNonPrime(lst) {
    let idx = 0; let prime = 0; let nonPrime = 0;
    while (lst[idx] != "stop") { let num = Number(lst[idx++]);
        if (num < 0) { console.log("Number is negative."); continue;}
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {if (num % i == 0) {isPrime = false;}}
        if (isPrime) {prime += num;}
        else {nonPrime += num;}}
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}