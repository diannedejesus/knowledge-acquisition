//take to sorted list of integers and splice them together in order
//the function will have to arrays of integers as inputs, they have to be ordered and they can be empty arrays
//the function will return a single array of sorted intergers. by splicing the the one array to another.
//for [2,3,4] & [1,2,5] = [1,2,2,3,4,5]
//for [] & [1,2] = [1,2]

//since we know the list are sorted we can go through the arrays using place holders. we can use a value to mark the insert point and another for the inserted item. 
//how this would work is we would use a loop to go through the items to insert and a value to represent current place to insert the item.

//we can make a loop that will stop when we reach the end of one of the arrays
//we have a value for each array arr1 arr2
//we use the first value to represent the place of insertion and the second for the value we wish to insert. 
//we will insert the value before the current value always or at the end of the array
//we verify if arr2 is smaller or equal to the current placeholder value if so we insert before that value
//then we add one to arr2
//if it is bigger than we will add one to arr1
//end loop
//we will need to add a check for the end of the array and make sure the last values are added. It can be checked with the bigger value check/else or after the loop is terminated.
//best to include it with the loop to keep the merging in one place.
//since the array length will me modified we need to account for that so when we add the rest of the array if any values are left over we will return the modified list

//for empty arrays this will work unless the second array has a value and the first doesn't so we will need to add an if for this case where it arr1 is empty we will return arr2

// [2,3,4] & [1,2,5]

// 2 <> 1 == 2 > 1
// [1,2,3,4]

// 2 <> 2 == 2=2
// [1,2,2,3,4]

// 2 <> 5 == 2 < 5
// 3 <> 5 == 3 < 5
// 4 <> 5 == 4 < 5
// [1,2,2,3,4,5]

function mergeLists(l1, l2){
  let arr1 = 0
  let arr2 = 0

  if(l1.length === 0) return l2

  while(arr1 < l1.length){
    if(l2[arr2] <=  l1[arr1]){
      l1.splice(arr1,0,l2[arr2])
      arr2++
    }else{
      arr1++
      if(arr1 >= l1.length && arr2 < l2.length){
        l1.splice(arr1,0, ...l2.slice(arr2))
        return l1
      }
    }
  }
  return l1
}

console.log(mergeLists([2,3,4], [1,2,5,6])) //[1,2,2,3,4,5]
console.log(mergeLists([1,2,4], [1,3,4])) //[1,1,2,3,4,4]
console.log(mergeLists([], []))
console.log(mergeLists([], [0]))