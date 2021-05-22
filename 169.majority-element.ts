/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start

function Count(nums:number[],element:number,low:number,high:number)
{
    let count=0;
    for(let i=low;i<=high;i++)
    {
        if(nums[i]==element)
        count++;
    }

    return count;
}

function DC(nums: number[],low:number,high:number): number {

    if(low==high) return nums[low];
    
    let mid=Math.floor((low+high)/2);

    let left_majority_element=DC(nums,low,mid);
    let right_majority_element=DC(nums,mid+1,high);

    if(left_majority_element==right_majority_element) return left_majority_element;

    if(Count(nums,left_majority_element,low,mid)>Count(nums,right_majority_element,mid+1,high))
    {
        return left_majority_element;
    }
    return right_majority_element;





};
function majorityElement(nums: number[]): number {

    return DC(nums,0,nums.length-1);



};
// @lc code=end

