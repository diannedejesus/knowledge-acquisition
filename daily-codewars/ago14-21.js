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

//then we will cycle through the list comparing values and inserting accordingly.

function mergeLists(l1, l2){
  let sortedList = []
  if(l1 === null && l2 !== null){return l2}
  if(l1 !== null && l2 === null){return l1}
    
  while (l1 !== null || l2 !== null) {
    if(l1 !== null || l2 !== null){
      if(l1 === null){
        console.log(l2)
        sortedList.push(l2.val)
        l2 = l2.next;
      }else{
        sortedList.push(l1.val)
        l1 = l1.next; 
      }
    }else if (l1.val < l2.val) {
      sortedList.push(l1.val)
      l1 = l1.next; 
    } else {
      sortedList.push(l2.val)
      l2 = l2.next;
      //if(l2 === null){sortedList.push(l1.val)}
    }
  }

  let list = null;
  for (let i = sortedList.length - 1; i >= 0; i--) {
    list = {val: sortedList[i], next: list};
  }

  return list
}

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
    next: null,                                         
  }
}





console.log(mergeLists(list1, list2)) //[1,2,2,3,4,5]
// console.log(mergeLists([1,2,4], [1,3,4])) //[1,1,2,3,4,4]
// console.log(mergeLists([], []))
// console.log(mergeLists([], [0]))