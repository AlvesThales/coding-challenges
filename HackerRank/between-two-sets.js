function getTotalX(a, b) {

    var counter = 0;
    var aCount = 0;
    var bCount = 0;
    var firstValid = [];
    var secondValid = [];

    for (let i = 1; i <= 100; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] === 0) aCount++;
            if (aCount === a.length) firstValid.push(i);
        }

        aCount = 0;

        for (let k = 0; k < b.length; k++) {
            if (b[k] % i === 0) bCount++;
            if (bCount === b.length) secondValid.push(i);
        }

        bCount = 0;
    }

    for (let i = 0; i < firstValid.length; i++) {
        for (let j = 0; j < secondValid.length; j++) {
            if (firstValid[i] === secondValid[j]) counter++;
        }
    }
    return counter;

}