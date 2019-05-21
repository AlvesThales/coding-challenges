function birthdayCakeCandles(ar) {
    let tallest = 0;
    let counter = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > tallest) {
            tallest = ar[i];
            counter = 1;
        } else if (ar[i] === tallest) {
            counter++;
        }
    }
    return counter;
}