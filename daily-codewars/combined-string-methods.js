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
//#3
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }

//#4
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    //factor for shark beging able to bit you should be how far he is from you and not the pontoon
    //but this one does not work in some cases if I do that.
    
    //let sharkDistanceFromYou = (sharkDistance - pontoonDistance)
    let newSharkSpeed = (dolphin ? sharkSpeed / 2 : sharkSpeed)
    let youReachPontoon = (pontoonDistance / youSpeed)
    
    //return (sharkDistanceFromYou / newSharkSpeed) < youReachPontoon ? 'Shark Bait!' : 'Alive!'
    return (sharkDistance / newSharkSpeed) < youReachPontoon ? 'Shark Bait!' : 'Alive!'
}