/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {

    if(nums.length==1) return nums[0];

    let isAllNegative=true;

    let max_so_far=0,max_ending_here=0;
    

    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>0) isAllNegative=false;
        max_ending_here+=nums[i];
        if(max_ending_here>max_so_far) max_so_far=max_ending_here;

        if(max_ending_here<0) max_ending_here=0;
    }

    if(isAllNegative) return Math.max(...nums);

    return max_so_far;

};
// @lc code=end

