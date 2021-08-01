//we will be recieving an array of objects, which will contain a single key/value pair which will be names
//we will be return a string composed of each name concatenated together with a comma and space expect for the last to values which will be seperated by the and symbol &.
//if we have only two objects then they will be concatenated with the & symbol
//if we recieve an empty array we return an empty string
//if we have a single value then we return it with no modifications

//[{name: 'chirsty'}, {name: steven}, {name: donald}, {name: jorge}]
//'chirsty, steven, donald & jorge'
//[{name: 'chirsty'}, {name: steven}] 
//'chirsty & steven'
//[{name: steven}] 
//'steven'
//[] 
//''

//names , name , name & name

//have a result variable that will be set to an empty string
//itenarate through the array using a for loop or other method
//using the name key word we select the current name to be added to the string
//check whether the current iteneration is two values less then the length or length -2
//if true we add an ampersand, else if it is not the last value we add a comma


function listString(list){
  let result = ''

  for(let i=0; i<list.length; i++){
    result += list[i].name
    if(i === list.length-2){
      result += ' & '
    }else if (i !== list.length-1){
      result += ', '
    }
  }
  return result
}


console.log(listString([{name: 'chirsty'}, {name: 'steven'}, {name: 'donald'}, {name: 'jorge'}]) === 'chirsty, steven, donald & jorge')
console.log(listString([{name: 'chirsty'}, {name: 'steven'}] ) === 'chirsty & steven')
console.log(listString([{name: 'steven'}] ) === 'steven')
console.log(listString([] ) === '')