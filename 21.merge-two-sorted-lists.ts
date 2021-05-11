/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    //let l1=l1;
   // let l2=l2;
    let merged:ListNode;
    let mergedHead:ListNode;
 
    if(l1==null && l2==null) return null;

    if(l1==null) return l2;
    if(l2==null) return l1;

    


    if(l1.val<=l2.val)
    {
        merged=l1;
        l1=l1.next;
    }
    else
    {
        merged=l2;
        l2=l2.next;
    }
    mergedHead=merged;

    while(l1!=null && l2!=null)
    {
        if(l1.val<=l2.val)
        {
            merged.next=l1;
            l1=l1.next;
        }
        else
        {
            merged.next=l2;
            l2=l2.next;
        }

       // merged.next=new ListNode();
       merged=merged.next;
    }

    if(l1!=null)
    {
        while(l1!=null)
        {
            merged.next=l1;
            l1=l1.next;
           // merged.next=new ListNode();
            merged=merged.next;
        }

    }

    if(l2!=null)
    {
        while(l2!=null)
        {
            merged.next=l2;
            l2=l2.next;
          //  merged.next=new ListNode();
            merged=merged.next;
        }

    }

    return mergedHead;



};
// @lc code=end

