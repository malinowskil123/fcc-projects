
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

function sumAll(arr) {
    arr = arr.sort((a,b) => {
        return a-b
    });
    let sum = arr.reduce((a,b)=> a+b,0);
    for(let i=arr[0]+1; i<arr[1]; i++){
        sum += i;
    }
    return sum;
}
// console.log(sumAll([4, 1])); 
// console.log(sumAll([1, 4]));
// console.log(sumAll([10, 5]));
// console.log(sumAll([5, 10]));

function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item =>
        !arr1.includes(item) || !arr2.includes(item)
    );
}
  
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function compareTriplets(a, b) {
    let scoreA = 0, scoreB = 0;
    for(let i=0; i<a.length; i++){
        if(a[i]>b[i]) scoreA+=1;
        if(a[i]<b[i]) scoreB+=1;
    }
    return [scoreA,scoreB];
}

// console.log(compareTriplets([5,6,7],[3,6,10]));
function diagonalDifference(arr) {
    let rightSum = 0, leftSum = 0;
    let rightIndex = 0,leftIndex = arr.length-1;
    for(let i=0; i<arr.length; i++){
        rightSum +=(arr[i][rightIndex]);
        rightIndex++;
        leftSum += arr[i][leftIndex];
        leftIndex--;
    }
    return Math.abs((rightSum - leftSum));
}

// console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

function plusMinus(arr) {
    let  totalPos= 0, totalNeg = 0, totalZero = 0;
    let valArr = [totalPos, totalNeg, totalZero];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>0) valArr[0] += 1;
        if(arr[i]<0) valArr[1] += 1;
        if(arr[i]==0) valArr[2] +=1;
    }
    for(let a in valArr){
        valArr[a] = (valArr[a]/arr.length).toFixed(6);
        console.log(valArr[a]);
    }
}
// plusMinus([-4,3,-9,0,4,1]);

function miniMaxSum(arr) {
    arr = arr.sort();
    let tempVar = 0;
    let sumArr = [];
    for(let i=0; i<arr.length; i++){
        tempVar = arr.splice(i,1);
        sumArr[i] = sum(arr);
        arr.splice(i,0,tempVar[0]);
    }
    return [Math.min(...sumArr),Math.max(...sumArr)];
    //hacker rank log to the console
    //console.log();
}
function sum(arr){
    return arr.reduce(function(acc, currentVal){
        return acc + currentVal;
    },0);
}
// console.log(miniMaxSum([1,2,3,4,5]))

function birthdayCakeCandles(ar) {
    let tallestCandle = Math.max(...ar);
    let blownOutCandles = 0;
    for(let i in ar){
        if(tallestCandle==ar[i])blownOutCandles+=1;
    }
    return blownOutCandles;
}

// birthdayCakeCandles([3,2,1,3]);

// function extraLongFactorials(n) {
//    return (factorialCalc(n)).toString(); 
// }
function factorialCalc(n){
    if(n<1) return null; 
    if(n===0) return 1;
    for(let i = n-1; i>0; i--){
        n *= i;
    }
    return n;
}
// console.log(extraLongFactorials(25));

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = countFruits(s,t,a,apples);
    let orangesCount = countFruits(s,t,b,oranges);
    console.log(applesCount);
    console.log(orangesCount);
}
function countFruits(s,t,d,arr){
    let fruitCounter = 0;
    for(let i = 0; i<arr.length; i++){
        arr[i] += d;
        if(arr[i]>=s&&arr[i]<=t) fruitCounter +=1;
    }
    return fruitCounter;
}
// countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6]);

function gradingStudents(grades) {
    for(let a in grades){
        if(grades[a]<100){
            if(checkMultiple(grades[a])-grades[a]<3&&grades[a]>=38){
                grades[a] = checkMultiple(grades[a]);
            }
        }    
    }
    return grades;
}
function checkMultiple(number){
    let arr = [];
    for(let i=0; i<2; i++){
        arr[i] = parseInt(number.toString().substr(i,1));
    }
    if(arr[1]<5) arr[1] = 5;
    if(arr[1]>5) arr[0] +=1, arr[1]=0;
    return parseInt(arr.join("")); ;
}
// console.log(gradingStudents([75,67,38,33,100]));
// console.log(checkMultiple(38));

function reverseString(str) {
    var arr = str.split(""),rev = "";
    for(var i=arr.length-1; i>=0; i--){
        rev += arr[i];
    }
    return rev;
}

function reverseString(str) {
    return (str=="")?  "" : reverseString(str.substring(1)) + str.charAt(0);
}
  
// console.log(reverseString("hello"));


function digitPlacesInInteger(num){
    const arr = num.toString().split("");
    let counter = 1;
    for(let i in arr){
        console.log(`digit in the ${counter++} position is ${arr[i]}`);
    }
}
// digitPlacesInInteger(2345923845092);
