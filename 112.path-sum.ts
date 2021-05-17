/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function hasPathSumUtil(root: TreeNode | null, targetSum: number,currentSum:number): boolean
{
    // if(root==null)
    // {
    //     return targetSum==currentSum;
    // }
     if(root.left==null && root.right==null)
    {
        return currentSum+root.val==targetSum;
    }
    else if(root.left==null && root.right!=null) 
    {
       return hasPathSumUtil(root.right,targetSum,currentSum+root.val);
    }
    else if(root.right==null && root.left!=null)
    {
        return hasPathSumUtil(root.left,targetSum,currentSum+root.val);
    }
    else 
    {
        return hasPathSumUtil(root.left,targetSum,currentSum+root.val)||hasPathSumUtil(root.right,targetSum,currentSum+root.val);
    }
} 

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

     if(root==null) return false;
    return hasPathSumUtil(root,targetSum,0);
    

};
// @lc code=end

