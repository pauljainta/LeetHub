/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head==null || head.next==null) return head;
    
    let temp=head;
    // while(temp.val==temp.next.val)
    // {
    //     temp=temp.next;
    // }
    // head=temp;
    // head.next=temp.next;
    let temp2=temp.next;

    while(temp2.next!=null)
    {
        if(temp2.val!=temp.val)
        {
            temp.next=temp2;
            temp=temp2;
            temp2=temp.next
        }
        else temp2=temp2.next;


        
    }

    if(temp2.val==temp.val) temp.next=null;
    else temp.next=temp2;


    return head;



};
// @lc code=end

