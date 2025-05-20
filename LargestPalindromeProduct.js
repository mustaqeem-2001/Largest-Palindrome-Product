function palindrome(num) {
    let numbers = num.toString().split('');

    for (let i = 0; i < numbers.length / 2; i++) {
        if (numbers[i] === numbers[numbers.length - 1 - i]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

function loop() {
    let i = 100;
    let j = 100;
    let highest_palindrome = 0;
    while (j < 1000) {
        while(i < 1000) {
            if ( palindrome(i * j) === true) {
                if (highest_palindrome < i * j) {
                    highest_palindrome = i * j;
                }
            }
            i++;
        }
        i = 100;
        j++;
    }
    return highest_palindrome;
}

console.log(loop());