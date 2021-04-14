const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft - distanceToPump) >= 0 ? true : false
};