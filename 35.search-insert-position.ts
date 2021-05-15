/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start


function binarySearch(arr:number[], l:number, r:number,  x:number):number
{
    let mid = Math.floor((r+l)/2);
    if (r > l) {
        if (arr[mid] == x)
        {
            return mid;
        }
         
 
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
 
       
        return binarySearch(arr, mid + 1, r, x);
    }


    if(arr[mid]>=x) return mid;
    else return mid+1;

    // if(r==l)
    // {
    //     if(arr[mid]>=x) return mid;
    //     else return mid+1;
    // }

  //  return -1;

};


function searchInsert(nums: number[], target: number): number {

    // if(binarySearch(nums,0,nums.length-1,target)==-1)
    // {
    //     nums.push(target);
    //    // nums=nums.sort();
    //     return binarySearch(nums,0,nums.length-1,target);
    // }

    return binarySearch(nums,0,nums.length-1,target);

};
// @lc code=end

