function well(x){
    const amountGood = x.filter(el => el === "good")
    
    return amountGood.length <= 0 ? 'Fail!' : amountGood.length <= 2 ? 'Publish!' : 'I smell a series!'
  }

//****PREP****//

//Parameter//
//an array of strings that will be either good or bad
//Return//
//publish for one or two good
//fail if no good
//I smell a series if more than two good
//Examples//
//bad, bad = fail
//bad bad good = publish
//bad good good = publish
//good good good = i smell a series
//Pseudo code//
//filter array to incluide only good
//the check length for each case
//
//
//
//

console.log(well(['bad', 'bad', 'bad']), '=Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), '=Publish!');

