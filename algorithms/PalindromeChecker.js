// function palindrome(str) {
//     cleanStr = str.replace(/[\W_]/g,"").toUpperCase();
//     console.log(cleanStr);
//     let reverseStr="";
//     for(let j=cleanStr.length; j>=0; j--){
//         reverseStr += cleanStr.charAt(j);
//     }
//     let bool = (cleanStr==reverseStr)? true : false;
//     return bool;    
// }

// console.log(palindrome("eye#"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("0_0 (: /- :) 0-0"));

function palindrome(str){
    let arr = str.replace(/[\W_]/g,"").toUpperCase().split("");
    let cleanStr=arr.join("");
    let reverseStr = arr.reverse().join("");
    // let reverseStr="";
    // for(let j=cleanStr.length; j>=0; j--){
    //     reverseStr += cleanStr.charAt(j);
    // }
    let bool = (cleanStr==reverseStr)? true : false;
    return bool;    
}
console.log(palindrome("Eye#"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /- :) 0-0"));
