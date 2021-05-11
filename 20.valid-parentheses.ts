/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {

    let stack:string[]=[];
    stack.push(s.charAt(0));
    for(let i=1;i<s.length;i++)
    {
       if((stack[stack.length-1]=="{" && s.charAt(i)=="}")||(stack[stack.length-1]=="(" && s.charAt(i)==")")||(stack[stack.length-1]=="[" && s.charAt(i)=="]"))
       {
            stack.pop();
       }
       else
       {
            stack.push(s.charAt(i));
       } 
    }

    return stack.length==0



};
// @lc code=end

