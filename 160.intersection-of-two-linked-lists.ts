/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    if(headA==null || headB==null) return null;
    let tempA=headA,tempB=headB;
    let nodecountA=0,nodecountB=0;

    while(tempA!=null)
    {
        nodecountA++;
        tempA=tempA.next;
        
    }
    while(tempB!=null)
    {
        nodecountB++;
        tempB=tempB.next;
        
    }
    let travBigger,travSmaller;

    if(nodecountA>nodecountB)
    {
        travBigger=headA;
        travSmaller=headB;
    }
    else
    {
        travBigger=headB;
        travSmaller=headA;
    }

    let NodeCountdiff=Math.abs(nodecountB-nodecountA);

    let i=1;
    while(i<=NodeCountdiff)
    {
        travBigger=travBigger.next;
        i++;
    }

    //let instersectNode=null;
    while(travBigger && travSmaller )
    {
        if(travSmaller==travBigger) return travBigger;

        travBigger=travBigger.next;
        travSmaller=travSmaller.next;
    }

    return null;

};
// @lc code=end

