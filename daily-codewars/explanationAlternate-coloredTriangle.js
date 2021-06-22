const triangle = row => {
  let reduced = row.length > 1 ? '' : row;
  for (let i = 0; i < row.length - 1; i += 1) {
    reduced += row[i] == row[i+1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i+1], '');
  }
  return reduced.length > 1 ? triangle(reduced) : reduced;
}

//recursive solution that uses the ternary operator to return the same letter
//if both are the same of the missing letter by replacing both tested letter with
//nothing (or deleting them) from the three possible options
//the for loop is run one less the length since you don't test the last letter
