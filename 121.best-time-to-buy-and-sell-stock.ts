/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let max_profit=0;
    for(let i=0;i<prices.length-1;i++)
    {
        if(i!=0 && prices[i]>=prices[i-1] ) continue;
        for(let j=i+1;j<prices.length;j++)
        {
            if(prices[j]-prices[i]>max_profit) max_profit=prices[j]-prices[i];
        }
    }

    return max_profit;

};
// @lc code=end

