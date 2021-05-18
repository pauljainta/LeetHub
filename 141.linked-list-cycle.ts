/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
    if(head==null || head.next==null) return false;

    // if(head.next==head) return true;

    let slow_pointer=head,fast_pointer=head;

    while(slow_pointer && fast_pointer && fast_pointer.next)
    {
        slow_pointer=slow_pointer.next;
        fast_pointer=fast_pointer.next.next;

        if(slow_pointer==fast_pointer) return true;

    }

    return false;
    
};
// @lc code=end

