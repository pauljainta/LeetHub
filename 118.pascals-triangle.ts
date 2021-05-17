/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
let pascalRows:number[][];
function generateRow(numRow:number):number[]
{
    let row:number[]=[];
    let prevrow=pascalRows[numRow-2];
    for(let i=1;i<=numRow;i++)
    {
        if(i==numRow||i==1) row.push(1);
        else
        {
            //for(let j=0;j<prevrow.length-1;j++)
           // {
            row.push(prevrow[i-1]+prevrow[i-2])
            //}
        }
    }

    return row;


}
function generate(numRows: number): number[][] {
    pascalRows=[];
    pascalRows.push([1]);
    for(let i=2;i<=numRows;i++)
    {
        pascalRows.push(generateRow(i));
    }

    return pascalRows;


};
// @lc code=end

