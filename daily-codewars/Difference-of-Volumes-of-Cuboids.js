function findDifference(a, b) {
    return Math.abs(a.reduce((acc, curr) => acc * curr) - b.reduce((acc, curr) => acc * curr))
  }