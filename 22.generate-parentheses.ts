/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

let AllPossibleCombinations:string[];

function recursiveCombinations(str:string,n:number,close:number,open:number):void
{
  
    if(open==n && close==n)
    {
        AllPossibleCombinations.push(str);
        return;
    }

    else
    {
        if(open>close)
        {
           // str+=")";
            recursiveCombinations(str+")",n,close+1,open);
        }
        if(open<n)
        {
           // str+="(";
            recursiveCombinations(str+"(",n,close,open+1);
        }
    }


}


function generateParenthesis(n: number): string[] {

    AllPossibleCombinations=[];

    recursiveCombinations("",n,0,0);
    return AllPossibleCombinations;

};
// @lc code=end

