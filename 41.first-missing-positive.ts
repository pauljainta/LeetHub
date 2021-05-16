/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {

    let i;
  
    for(i=0;i<nums.length;i++){
       let correctPos=nums[i]-1;
       while(nums[i]>=1 && nums[i]<=nums.length && nums[i]!=nums[correctPos])
       {
            let temp=nums[i];
            nums[i]=nums[correctPos];
            nums[correctPos]=temp;
            
            correctPos=nums[i]-1;
       }
    }

    for(i=0;i<nums.length;i++)
    {
        if(nums[i]!=i+1) return i+1;
    }


    return i+1;
};
// @lc code=end

