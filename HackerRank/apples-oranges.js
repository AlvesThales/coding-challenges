function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var apCount = 0;
    var orCount = 0;

    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) apCount++;
    }

    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] <= t && b + oranges[i] >= s) orCount++;
    }

    console.log(apCount);
    console.log(orCount);

}