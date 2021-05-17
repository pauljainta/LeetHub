/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function factorial(n:number)
{
    if(n<=1) return 1;
    return n*factorial(n-1);
}

function climbStairs(n: number): number {

    if(n%2==0)
    {
        return factorial(n+1);
    }


};
// @lc code=end

