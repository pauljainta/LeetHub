/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addOneDigit(a:string,b:string,c:string):string[]
{
    if(c=="0")
    {
        if(a=="0" && b=="0")
        {
            return ["0","0"];
        }
        else if(a=="0" && b=="1")
        {
            return ["1","0"];
        }
        else if(a=="1" && b=="0")
        {
            return ["1","0"];
        }
        else
        {
            return ["0","1"];
        }
    }
    else
    {
        if(a=="0" && b=="0")
        {
            return ["1","0"];
        }
        else if(a=="0" && b=="1")
        {
            return ["0","1"];
        }
        else if(a=="1" && b=="0")
        {
            return ["0","1"];
        }
        else
        {
            return ["1","1"];
        }

    }

};

function addBinary(a: string, b: string): string {

    let i=a.length-1,j=b.length-1;
    let res:string="";
    let carry="0";
    let addOneRes;
    while(true)
    {
        if(i<0 && j<0)
        {
            addOneRes=addOneDigit("0","0",carry);
            if(addOneRes[0]!="0") res+=addOneRes[0];
            break;
        }
        else if(i<0 && j>=0)
        {
            addOneRes=addOneDigit("0",b[j],carry);
            res+=addOneRes[0];
            carry=addOneRes[1]; 
          
        }
        else if(j<0 && i>=0)
        {
            addOneRes=addOneDigit(a[i],"0",carry);
            res+=addOneRes[0];
            carry=addOneRes[1]; 
        }

        else
        {
            addOneRes=addOneDigit(a[i],b[j],carry);
            res+=addOneRes[0];
            carry=addOneRes[1]; 
        }

        i--;
        j--;

    }

    res=res.split("").reverse().join("");

    i=0;
    while(res[i]=="0" && i<res.length)
    {
        i++;
    }
    if(i==res.length) return "0";

    return res.substr(i,res.length-i);
};
// @lc code=end

