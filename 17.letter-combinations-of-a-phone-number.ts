/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start

let combinations:string[];
function DigitToCharMap(digit:string):string{
    if(digit=="2") return "abc";
    else if(digit=='3') return "def";
    else if(digit=="4") return "ghi";
    else if(digit=="5") return "jkl";
    else if(digit=="6") return "mno";
    else if(digit=="7") return "pqrs";
    else if(digit=="8") return "tuv";
    else return "wxyz";

};

function backtrack(digits:string,position:number,currentStr:string):void
{

    if(currentStr.length==digits.length)
    {
        combinations.push(currentStr);
        return;
    }

    let s=DigitToCharMap(digits[position]);
    for(let i=0;i<s.length;i++)
    {
        backtrack(digits,position+1,currentStr+s[i]);
    }

};

function letterCombinations(digits: string): string[] {

     combinations=[];

    if(digits.length==0) return [];

    let chars=DigitToCharMap(digits[0]);
   
    

    return combinations;



};
// @lc code=end

