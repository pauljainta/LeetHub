/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {

    if(head==null||head.next==null) return head;

    let temp=head;
    head=head.next;
    temp.next=head.next;
    head.next=temp;

    let pointer1=head.next;
    let pointer2=pointer1.next;

    if(pointer2!=null)
    {
            while(pointer2.next!=null)
            {
                let temp=pointer2;
                pointer2=pointer2.next;
                temp.next=pointer2.next;
                pointer2.next=temp;
                pointer1.next=pointer2;

                pointer1=pointer2.next;
                pointer2=pointer1.next;
                if(pointer2==null) break;

        
            }

    }


    

    return head;



};
// @lc code=end

