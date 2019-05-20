function Staircase(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n - i; j >= 1; j--) {
            str += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += "#";
        }
        console.log(str);
        str ="";
    }
}