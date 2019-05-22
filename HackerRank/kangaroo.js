function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 > v2) return "NO";
    if (x2 > x1 && v2 > v1) return "NO";

    if (x2 > x1 && v2 < v1) {
        while (x2 > x1) {
            x2 += v2;
            x1 += v1;
            console.log(x1, x2);
            if (x1 === x2) return "YES";
        }
    }

    if (x1 > x2 && v2 > v1) {
        while (x1 > x2) {
            x2 += v2;
            x1 += v1;
            console.log(x1, x2);
            if (x1 === x2) return "YES";
        }
    }

    return "NO";

}