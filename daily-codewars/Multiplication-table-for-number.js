function multiTable(number) {
    let multTable = ''
    
    for (let i=1; i<=10; i++){
      multTable += `${i} * ${number} = ${i*number}` + (i < 10 ? '\n' : '')
    }
    
    return multTable
  }