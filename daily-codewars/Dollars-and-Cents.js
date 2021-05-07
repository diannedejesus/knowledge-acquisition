function formatMoney(amount){
    let trailingValue = String(amount).includes('.') ? '' : '.'
    trailingValue += '0'.repeat(3 - String(amount).slice( String(amount).indexOf('.') ).length)
    return `$${amount}${trailingValue}`
  }


console.log(formatMoney(39.99), '===$39.99');
console.log(formatMoney(3), '===$3.00');
console.log(formatMoney(3.1), '===$3.10');
