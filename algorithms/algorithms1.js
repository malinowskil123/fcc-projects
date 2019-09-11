
function largestOfFour(arr) {
    var tempArr = [];
    for(var i=0; i<arr.length; i++){
        var highest =arr[i][0];;
        for(var j=1;j<arr[i].length;j++){
            if(arr[i][j] > highest){
                highest = arr[i][j];
            }
        }
        tempArr[i] = highest;
    }
    return tempArr;
}

// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

function confirmEnding(str, target) {
    var endsWith = str.substring(str.length-target.length);
    var found=(endsWith==target) ? true : false;
    return found;
  }
  
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
// confirmEnding("Congratulation", "on")

function repeatStringNumTimes(str, num) {
    var tempArr=[];
    if(num<0){
        str="";
    }
    else{
        for(var i=0;i<num;i++){
            tempArr[i] = str;  
        }
    }
    var string = tempArr.join("");
    return string;
}

// console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
    if(str.length<=num){
        return str
    }else{
        str = str.substring(0,num) +"...";
        return str;
    }
}
//console.log( truncateString("A-tisket a-tasket A green and yellow basket", 8));  

function findElement(arr, func) {
    for(var i=0; i<arr.length;i++){
        if( func(arr[i])==true){
            return arr[i];
        }
    }
}
  
//console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
//console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

function booWho(bool) {
    var boolBlah = (bool==true||bool==false)&&(bool!==1)? true : false;
    return boolBlah
}

//console.log(booWho(1));

function titleCase(str) {
    let strArr = str.split(" ");
    for(var i=0;i<strArr.length;i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() +strArr[i].substring(1).toLowerCase();
    }
    return strArr.join(" ");
}
  
//console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
    let tempArr = arr2.slice();
    for(var i=arr1.length-1; i>=0;i--){
        tempArr.splice(n,0,arr1[i]);
    }
    return tempArr;
}
//console.log(frankenSplice([1, 2, 3], [4, 5], 1));// should return [4, 1, 2, 3, 5].
//console.log(frankenSplice([1, 2], ["a", "b"], 1));


/*
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].*/


function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }

// console.log(bouncer([7, "ate", "", false, 9]));

function getIndexToIns(arr, num) {
    if(arr.length==0) return 0;
    
    arr = arr.sort(function(a,b){
        return a-b;
    });
    for(var a=0; a<arr.length;a++){
        if(arr[a]>=num) return a;
    }
    return arr.length;
}
// console.log(getIndexToIns([2, 5, 10], 15));
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log( getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([2, 5, 10], 15));

function mutation(arr) {
    for(var i in arr){
        arr[i] =arr[i].toUpperCase();
    }
    var tempArr = Object.assign([],arr[1]);
    tempArr.sort(function(a,b){
        return a-b;
    });
    var bool=false;
    for(var a in tempArr){
        bool = arr[0].includes(tempArr[a]);
        if(bool==false)break;
    }
    return bool;
}
// console.log(mutation(["hello", "neo"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));

//finish
// function chunkArrayInGroups(arr, size) {
    
//         for(var a=0;){
//             arr.push([arr[a]]);
//         }
//     return arr;
// }
  
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));