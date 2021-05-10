/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let iterator=head;
    let i=0;



    while(iterator!=null)
    {
        i++;
        iterator=iterator.next;
    }

    if( n==i) return head.next;

    let delete_position=i-n+1;
    iterator=head;
    i=1;

    while(i!=delete_position-1)
    {
        iterator=iterator.next;
        i++;
    }

    iterator.next=iterator.next.next;

    return head;




};
// @lc code=end

