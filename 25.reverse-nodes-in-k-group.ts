/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function getTail(head: ListNode | null, k: number):ListNode|null
{
  if(head==null||head.next==null) return head
   let tail=head;
   let i=1;
   while(i<k)
   {
       tail=tail.next;
       if(tail==null) break;
       i++;
   } 

   return tail;

};

function reverseOneGroup(head: ListNode | null, k: number):ListNode|null
{
   
    let tail=getTail(head,k);
    if(tail==null) return tail;
    let tail_next=tail.next;



  //  if(head==null||head.next==null) return head;

    let list_to_do=head.next;
    let reversed_list=head;

    reversed_list.next=null;

   while (list_to_do != tail_next) {
    let temp = list_to_do;
    list_to_do = list_to_do.next;

    temp.next = reversed_list;
    reversed_list = temp;
  }

  return reversed_list;



};

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {

    if(head==null || head.next==null|| k==1) return head;

   let tail_next_of_prev_list=getTail(head,k).next;

   let reversed_list=reverseOneGroup(head,k);
   let tail=getTail(reversed_list,k);

    while(tail_next_of_prev_list!=null)
    {
      if(getTail(tail_next_of_prev_list,k)==null)
      {
        tail.next=tail_next_of_prev_list;
        break;
      }

      let temp=getTail(tail_next_of_prev_list,k).next;
      tail.next=reverseOneGroup(tail_next_of_prev_list,k);
      tail=getTail(tail.next,k);
      tail_next_of_prev_list=temp;
      
    }

    return reversed_list;



    

};
// @lc code=end

