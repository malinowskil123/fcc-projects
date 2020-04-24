const currencyDictionary = [
  { name: 'ONE HUNDRED', value: 100.0 },
  { name: 'TWENTY', value: 20.0 },
  { name: 'TEN', value: 10.0 },
  { name: 'FIVE', value: 5.0 },
  { name: 'ONE', value: 1.0 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.1 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 },
]

function checkCashRegister(price, cash, cid) {
  const register = cid.reduce(
      (acc, curr) => {
        acc.total = +(acc.total + curr[1]).toFixed(2)
        acc[curr[0]] = curr[1]
        return acc
      },
      { total: 0 }
    ),
    changeValue = +(cash - price).toFixed(2)
  let change = getChange(changeValue, register, cid),
    status =
      change.leftoverChange > 0 && change.changeDue.length === 1
        ? 'INSUFFICIENT_FUNDS'
        : getStatus(changeValue, register.total)
  return {
    status,
    change:
      change.leftoverChange > 0 && change.changeDue.length === 1
        ? []
        : change.changeDue,
  }
}

const getStatus = (changeValue, totalCid) => {
  if (changeValue === totalCid) return 'CLOSED'
  else if (changeValue > totalCid) return 'INSUFFICIENT_FUNDS'
  else return 'OPEN'
}

const getChange = (changeValue, register, cid) => {
  if (changeValue > register.total)
    return { leftoverChange: changeValue, changeDue: [] }
  else if (changeValue === register.total)
    return { leftoverChange: changeValue, changeDue: cid }
  else {
    const changeDue = currencyDictionary.reduce((acc, curr) => {
      let value = 0
      while (register[curr.name] > 0 && changeValue >= curr.value) {
        changeValue = +(changeValue - curr.value).toFixed(2)
        register[curr.name] -= curr.value
        value = +(value + curr.value).toFixed(2)
      }
      if (value > 0) acc.push([curr.name, value])
      return acc
    }, [])
    return { leftoverChange: changeValue, changeDue }
  }
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// )

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// )
