/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let oneBigSortedList = lists.join().split(',').sort(function compareFn(a, b) {return a - b}).reduceRight((next, currValue) => ({currValue, next}))
  return oneBigSortedList
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))