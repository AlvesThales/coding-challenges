function miniMaxSum(arr) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    let a = sum - max;
    let b = sum - min;
    let res = a + " " + b;

    console.log(res);

}