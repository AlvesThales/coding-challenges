//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
//It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.



function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++;
        else if (arr[i] < 0) negative++;
        else zero++;
    }

    positive = (positive / arr.length);
    negative = (negative / arr.length);
    zero = (zero / arr.length);

    positive = positive.toFixed(6);
    negative = negative.toFixed(6);
    zero = zero.toFixed(6);
    
    console.log(positive);
    console.log(negative);
    console.log(zero);
    
}