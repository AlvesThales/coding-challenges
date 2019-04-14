//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


function LetterChanges(str) { 

  let res ="";
  
  for (let i=0; i<= str.length - 1; i++ ) {
      
      
     let code = str.charCodeAt(i);
     
     if (code >= 65 && code <= 90 || code >=97 && code <= 122 ) {
         
         code = str.charCodeAt(i) + 1;
     
     if (code === 123) {code = 97}
     if (code === 91) {code = 65}
     
     
     }
     
     let newletter = String.fromCharCode(code);
     
      if (newletter === "a" || newletter === "e" || newletter === "i" || newletter === "o" || newletter === "u") {
          newletter = newletter.toUpperCase();
      }
     
     res += newletter;
  }
  
  
  return res; 
         
}