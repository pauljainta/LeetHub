/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let max_profit=0;
    for(let i=1;i<prices.length;i++)
    {
        if(prices[i]>prices[i-1]) max_profit+=(prices[i]-prices[i-1]);
    }

    return max_profit;

};
// @lc code=end

