//#1
function apple(x){
    return (Number(x)**2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

//#2
function array(arr){
    if(arr.length < 3){
      return null
    }else{
      let check = arr.split(',')
      check.shift()
      check.pop()
      check = check.join(' ').trim()
      return check === '' ? null : check
    }
  }

