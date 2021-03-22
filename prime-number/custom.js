let isPrime = true;

for (let dividend = 2; dividend <= 10; dividend++) {
    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }
    }


    if (isPrime != true) {
        console.log(`${dividend} != is not a prime number`);
        isPrime = true;
    } else {
        console.log(`${dividend} == is a prime number`);
    }

}