/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {

    let singleNum=nums[0];

    for(let i=1;i<nums.length;i++)
    {
        singleNum=singleNum^nums[i];
    }

    return singleNum;

};
// @lc code=end

