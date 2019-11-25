function rot13(str) {
    const arr = str.split("");
    const regex = new RegExp(/(\w)/)
    for(let i=0; i<arr.length;i++){
        if(regex.test(arr[i])==true){
            arr[i] = arr[i].charCodeAt(arr[i])+13;
            if(arr[i]>90) arr[i] = 65 + (arr[i] - 91);
            arr[i] = String.fromCharCode(arr[i]);
        }
    }
    return arr.join("");
}
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));