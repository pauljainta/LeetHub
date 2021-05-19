/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {

    let startPointer=0,endPointer=numbers.length-1;
    // for(let i=0;i<numbers.length-2;i++)
    // {
    //     for(let j=0;j<numbers.length-1;j++)
    //     {
             
    //     }
    // }

    while(startPointer<endPointer)
    {
        if(numbers[startPointer]+numbers[endPointer]==target)
        {
            return [startPointer+1,endPointer+1];
        }
        else if(numbers[startPointer]+numbers[endPointer]<target)
        {
            startPointer++;
        }
        else
        {
            endPointer--;
        }
    }


};
// @lc code=end

