/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
         let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextTemp = curr.next; // 1. Save the next node (so we don't lose it)
        curr.next = prev;         // 2. Reverse the pointer to face backward
        prev = curr;              // 3. Move 'prev' one step forward
        curr = nextTemp;          // 4. Move 'curr' one step forward
    }

    // 'prev' will be pointing to the new head of the reversed list
    return prev;
    }
}
