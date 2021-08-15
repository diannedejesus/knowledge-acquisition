/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//we have to merge to sorted linked-list, maintaining the sort. The list is implement as described above. We will be using objects to simulate the linked-lists for testing the code.

//we will create a new list

//In this exercise I created an empty object to store the new list
//and a variable to act as a pointer to point at the part of the object we are currently working with.
//as long as both lists contain items we will continue looping
//we verify if which of the current items of both list is smaller
//we add that item to next key of our object and move that list to the next item
//then we will move our list to the next item/space to add the next item.
//when one of the two list is empty the loop will stop and then we will check if one of the lists still has items. if it does then we append them to the end.

//this last part also accounts for one of the two list being empty.
//if one is empty then the loop wont run and we will have an empty object
//the we check if one of the list has items and that will be assign to our empty object.

//this works becuase when working with objects we can't directly create a copy. Instead when we assign it like in the line:
// let compileList = sortedList
//we are passing a reference to the original object
//so this line:
//compileList.next = l1
//is saying create the key next inside of sortedList and assign l1 to it (we would be assigning the entire l1 list)
//here:
//compileList = compileList.next
//here we will be changing the reference of compile list to the key next, which will move it so we can assign the next item
//even though we are assigning the passed lists to the current next item it doesn't matter since we move and reassign it constructing our new list in the order we need it to be.

function mergeLists(l1, l2){
    let sortedList = {}
    let compileList = sortedList
  
    while (l1 !== null && l2 !== null) {
      if(l1.val < l2.val){
        compileList.next = l1
        l1 = l1.next; 
      }else {
        compileList.next = l2
        l2 = l2.next;
      }
      compileList = compileList.next
    }
  
    if (l1 === null) { compileList.next = l2; }
    if (l2 === null) { compileList.next = l1; }
  
    return sortedList.next
  }
  
  //cases to use as tests
  const list1 = {
    val: 2,
    next: {
      val: 3,                                             
      next: {
        val: 4,
        next: null,	
      }
    }
  }
  
  const list2 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 6,
          next: null,	
        }	
      }                                         
    }
  }
  
  const list3 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null,
      }                                         
    }
  }
  
  const list4 = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      }                                         
    }
  }
  
  const list5 = {
    val: 0,
    next: null,
  }
  
  //tests
  
  console.log(mergeLists(list1, list2)) //[1,2,2,3,4,5]
  console.log(mergeLists(list3, list4)) //[1,1,2,3,4,4]
  console.log(mergeLists(null, null))
  console.log(mergeLists(null, list5))