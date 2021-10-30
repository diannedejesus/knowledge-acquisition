function updateLight(current) {
  const lightStates = ['green', 'yellow', 'red']
  const currentState = lightStates.indexOf(current)

  if(currentState < lightStates.length-1){
    return lightStates[currentState+1]
  }else{
    return lightStates[0]
  }

}