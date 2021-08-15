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

//I want the while loop to through both lists as long as it is not null. 
//I need to account for when either list has less items then the other.

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
      //console.log(sortedList)
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