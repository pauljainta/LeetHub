/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start

function binarySearch(nums:number[],left_index:number,right_index:number,target:number):number
{


    if (right_index >= left_index) {
        let mid = Math.floor((left_index + right_index) / 2);
 
       
        if (nums[mid] == target)
            return mid;
 
        
        if (nums[left_index] <= nums[mid])
        {
            if(target>=nums[left_index] && target<=nums[mid])
            {
                return binarySearch(nums, left_index, mid - 1, target);
            }
            else
            {
                return binarySearch(nums, mid+1, right_index, target); 
            }
        }
        else
        {
            if(target>=nums[mid] && target<=nums[right_index])
            {
                return binarySearch(nums, mid+1, right_index, target);
            }
            else
            {
                return binarySearch(nums, left_index,mid-1, target); 
            }

        }
 
        
        
    }
 
    return -1;

}

function search(nums: number[], target: number): number {

    if(nums.length==1 && nums[0]!=target)
    return -1;


    return binarySearch(nums,0,nums.length-1,target);
};
// @lc code=end

