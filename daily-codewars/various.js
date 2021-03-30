function otherAngle(a, b) {
  return 180 - a - b;
}

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

String.prototype.toAlternatingCase = function () {
   return [...this].map(el => (el.toUpperCase() === el) ? el.toLowerCase() : el.toUpperCase()).join('')
}

const rps = (p1, p2) => {
 return  (p1 === 'scissors' && p2 === 'paper') ? "Player 1 won!" 
  : (p1 === 'scissors' && p2 === 'rock') ? 'Player 2 won!' 
  : (p1 === 'rock' && p2 === 'paper') ? 'Player 2 won!' 
  : (p1 === 'rock' && p2 === 'scissors') ? "Player 1 won!" 
  : (p1 === 'paper' && p2 === 'rock') ? 'Player 1 won!' 
  : (p1 === 'paper' && p2 === 'scissors') ? "Player 2 won!" 
  : 'Draw!'
  
};

function square(num){
  return num*num
}

function switchItUp(number){
    switch(number){
        case 1:
        return 'One'
        case 2:
        return 'Two'
        case 3:
        return 'Three'
        case 4:
        return 'Four'
        case 5:
        return 'Five'
        case 6:
        return 'Six'
        case 7:
        return 'Seven'
        case 8:
        return 'Eight'
        case 9:
        return 'Nine'
        case 0:
        return 'Zero'
    }
   }

   function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

  function lovefunc(flower1, flower2){
    return (flower1 % 2) === (flower2 % 2) ? false : true
  }