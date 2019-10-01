function convertToRoman(num) {
   const table ={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   let romanStr = "";
   for(let i in table){
        while(num>=table[i]){
            romanStr += i;
            num -= table[i];
        }
   }
   return romanStr;
}

console.log(convertToRoman(54));
