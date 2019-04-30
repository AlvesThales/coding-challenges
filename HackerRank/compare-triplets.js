// Compare the Triplets Challenge

function compareTriplets(a, b) {
    var aPoints = 0;
    var bPoints = 0;
    var res = [];
    for (let i = 0; i <= 3; i++) {
        if (a[i] > b[i]) aPoints += 1;
        else if (a[i] < b[i]) bPoints += 1;
    }
    res = [aPoints, bPoints];
    return res;
}