function checkCashRegister(price, cash, cid) {
  const currencyValues = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  let changeDue = cash - price;
  let totalCID = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeArr = [];
    for (let i = currencyValues.length - 1; i >= 0; i--) {
      let currentValue = currencyValues[i][1];
      let currentValueName = currencyValues[i][0];
      let currentValueTotal = cid[i][1];
      let changeAmount = 0;
      while (changeDue >= currentValue && currentValueTotal > 0) {
        changeDue -= currentValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currentValueTotal -= currentValue;
        changeAmount += currentValue;
      }
      if (changeAmount > 0) {
        changeArr.push([currentValueName, changeAmount]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArr };
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
