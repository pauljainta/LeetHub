
function longestValidParentheses(s: string): number {

    if(s.length==0||s.length==1) return 0;
    let max_len=0;

    let stack:number[]=[];
    stack.push(-1);

    for(let i=0;i<s.length;i++)
    {
         if(s.charAt(i)=="(")
         {
              stack.push(i);
         }
         else
         {
              stack.pop();
              if(stack.length==0)
              {
                    stack.push(i)
              }
              else
              {
                   max_len=Math.max(max_len,i-stack[stack.length-1]);
              }
         }
    }

    return max_len;


};
// @lc code=end

