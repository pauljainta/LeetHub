/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start

function isPallindromeUtil(s:string,start:number,end:number):boolean
{
    if(start==end)
    {
        return true;
    }

    if(s[start]==s[end]) return isPallindromeUtil(s,start+1,end-1);

    return false;
}
function isPalindrome(s: string): boolean {

    return isPallindromeUtil(s,0,s.length-1);


};
// @lc code=end

