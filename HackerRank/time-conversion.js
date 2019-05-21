function timeConversion(s) {
    var letter = s.charAt(8);
    var hours = s.substring(0, 2);
    hours = parseInt(hours);
    var res = "";

    if (letter === "A" && hours === 12) {
        hours = 0;
    } else if (letter === "P" && hours != 12) {
        hours = hours + 12;
    }

    hours = ('0' + hours).slice(-2);

    return hours.concat(s.substring(2, 8));

}