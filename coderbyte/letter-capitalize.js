//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

function LetterCapitalize(str) { 

let split = str.split(" ");
let res ="";

for (let i=0; i<= split.length - 1; i++) {
    let word = split[i];
    let firstLetter = word.slice(0,1);
    let newLetter =  firstLetter.toUpperCase();
    let newWord = word.replace(firstLetter,newLetter);
    res += newWord + " ";
}
  res = res.trim();
  return res;    
}
   