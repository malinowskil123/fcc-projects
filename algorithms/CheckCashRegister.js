// function checkCashRegister(price, cash, cid) {
//     let output = {status:"",change: []};
//     let total = getTotal(cid);
//     const change = cash-price;
//     output.status = outputStatus(change, total);
//     if(output.status=="OPEN") output.change =  outputChange(change,cid);
//     return output;
// }
  
// function getTotal(cid){
//     return cid.reduce(function(a,b){
//         return a+b[1];
//     },0.0).toFixed(2);
// }
// function outputStatus(change,total){
//     if(change>=total) return "INSUFFICIENT_FUNDS";
//     if(change==0) return "CLOSED"
//     return "OPEN"
// }
// function outputChange(change, cid){
//     const values = [
//         {name: "ONE HUNDRED",  value: 100.00},
//         {name: "FIFTY",  value: 50.00},                
//         {name: "TWENTY",  value: 20.00},        
//         {name: "TEN",  value: 10.00},
//         {name: "FIVE",  value: 5.00},
//         {name: "ONE",  value: 1.00},
//         {name: "QUARTER",  value: 0.25},
//         {name: "DIME",  value: 0.10},
//         {name: "NICKEL",  value: 0.05},
//         {name:"PENNY", value: 0.01},
//     ];
//     let result = values.reduce(function(acc, next, index){
//         if(change >= next.value){
//             let currentValue = 0.0;
//             while(change >= next.value && cid[index][1] >= next.value){
//                 currentValue += next.value;
//                 change -= next.value;
//                 change = Math.round(change*100)/100;
//                 cid[index][1] -= next.value;
//             }
//             acc.push([next.name,currentValue.toFixed(2)]); 
//             return acc;
//         } 
//         else{
//             return acc;
//         }  
//     },[]);
//     return result;
// }

function checkCashRegister(price, cash, cid) {
    const values = [
        {name: "ONE HUNDRED",  value: 100.00},
        {name: "FIFTY",  value: 50.00},                
        {name: "TWENTY",  value: 20.00},        
        {name: "TEN",  value: 10.00},
        {name: "FIVE",  value: 5.00},
        {name: "ONE",  value: 1.00},
        {name: "QUARTER",  value: 0.25},
        {name: "DIME",  value: 0.10},
        {name: "NICKEL",  value: 0.05},
        {name:"PENNY", value: 0.01},
    ];
    let change = cash - price;
    let totalCid = cid.reduce(function(acc,next){
        return acc + next[1];
    },0.0);
    let output = {status:"",change: []};

    if(totalCid<change){
        output.status = "INSUFFICIENT_FUNDS"
    }
    else if(totalCid == change){
        output.status = "CLOSED"
    }
    else{
        output.status = "OPEN";
        cid = cid.reverse()
        let result = values.reduce(function(acc, next, index){  
            if(change >= next.value){
                let currentValue = 0.0;
                while(change >= next.value && cid[index][1] >= next.value){
                    currentValue += next.value;
                    change -= next.value;
                    change = Math.round(change*100)/100;
                    cid[index][1] -= next.value;
                }
                acc.push([next.name,currentValue.toFixed(2)]); 
                return acc;
            } 
            else{
                return acc;
            }  
        },[]);
        output.change = result;
    }
    return output;
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


// return {status: "OPEN", change: [["QUARTER", 0.5]]}