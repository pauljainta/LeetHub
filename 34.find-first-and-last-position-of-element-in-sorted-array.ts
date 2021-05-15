/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
let startIndex:number;
let endIndex:number;

function binarySearch(arr:number[], l:number, r:number,  x:number):void
{
    if (r >= l) {
        let mid = Math.floor(l + (r - l) / 2);
 
       
        if (arr[mid] == x)
        {
            if(mid>=endIndex) endIndex=mid;

            if(mid<=startIndex) startIndex=mid;

            if(mid+1<=r && arr[mid+1]==x) binarySearch(arr,mid+1,r,x);
            if(mid-1>=l && arr[mid-1]==x) binarySearch(arr,l,mid-1,x);

        }
          //  return mid;
 
        if (arr[mid] > x)
            binarySearch(arr, l, mid - 1, x);
 
       
        binarySearch(arr, mid + 1, r, x);
    }
 
    return;
};

function searchRange(nums: number[], target: number): number[] {


    if(nums.length==0||(nums.length==1 && nums[0]!=target)) return [-1,-1];
    // let indices:number[];
    // indices.push(-1);
    // indices.push(-1);

    startIndex=nums.length;
    endIndex=-1;

    binarySearch(nums,0,nums.length-1,target);

    if(startIndex!=nums.length) return [startIndex,endIndex];

    return [-1,-1];




   // return indices;

};
// @lc code=end

