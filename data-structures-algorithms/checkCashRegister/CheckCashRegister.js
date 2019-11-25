const currencyDictionary = [
    {name: "PENNY", value: 0.01},
    {name: "NICKEL" , value: 0.05 },
    {name: "DIME" , value: 0.10 },
    {name: "QUARTER", value: 0.25 },
    {name: "ONE" , value: 1.00},
    {name:  "FIVE", value: 5.00 },
    {name: "TEN" , value: 10.00 },
    {name: "TWENTY", value: 20.00 },
    {name: "ONE HUNDRED", value: 100.00 },
]

function checkCashRegister(price, cash, cid) {
    let output = {status:"",change:[]}
    let changeNeeded = cash - price;
    let totalCash = getTotal(cid);
    return getChange(changeNeeded, cid); 
}

function getTotal(changeInDrawer){
    let total = 0;
    for(let i in changeInDrawer){
        total+= changeInDrawer[i][1];
    }
    return total.toFixed(2);
}

function getChange(changeNeeded, cid){
    let change = [];
    let coinAmount = 0;
    let coinValue = 0;

   for(let i in cid){
        // console.log(cid[i][1]);
        // console.log(currencyDictionary[i].value)
        coinValue = currencyDictionary[i].value;
        // console.log(coinValue);
        coinAmount = Number((cid[i][1]/coinValue).toFixed(0));
        // console.log(coinAmount);
        if(changeNeeded<=coinValue){
            changeNeeded -= coinValue;

            if(changeNeeded==0){
                
            }
            console.log(changeNeeded);
        }
    }
    // for(let i in cid){
    //     console.log(cid[i][1]);
    //     console.log(currencyDictionary[i].value)
    // }
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));




/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/