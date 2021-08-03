// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// function range(a, b){
//     let range = []

//     for(let i=a; i<=b; i++){
//         range.push(i)
//     }

//     return range
// }

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sum(a){
    let summed = 0

    for(let i=0; i<a.length; i++){
        summed += a[i]
    }

    return summed
}

//console.log(sum(range(1, 10)));
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// // Your code here.
function range(a, b, c=1){
    let range = []

    if(a > b){ c = -1}

    if(c > 0){
        for(let i=a; i<=b; i=i+c){
            range.push(i)
        }
    }else{
        for(let i=a; i>=b; i=i+c){
            range.push(i)
        }
    }
    return range
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55