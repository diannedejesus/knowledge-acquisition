function bump(x){
  return x.split`n`.length<17?'Woohoo!':'Car Dead'
}

//bumps in road are mark by 'n' and flat road __ if more or= to 15 then car dies
//by spliting the string by the bumps you will get an array with 16 division for exactly 15 bumps
//which you can use to calculate whether the car is dead or not

//nnn__nnn__nn__nnn__n__nnn = [ '', '', '', '__', '', '', '__', '', '__', '', '', '__', '__', '', '', '' ]