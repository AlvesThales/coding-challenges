function FirstReverse(str) { 

let split = str.split("");
var res ="";

for (let i = str.length-1; i>=0; i--) {
    res = res.concat(split[i]);
}
  return res; 
         
}