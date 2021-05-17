/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

 function maxDepth(root: TreeNode | null): number {
    if(root==null) return 0;
    else if(root.left==null && root.right==null) return 1;
    else if(root.left!=null && root.right==null) return 1+maxDepth(root.left);
    else if(root.right!=null && root.left==null) return 1+maxDepth(root.right);

    else return Math.max(1+maxDepth(root.left),1+maxDepth(root.right));

};
function isBalanced(root: TreeNode | null): boolean {

    if(root==null) return true;
    // else if(root.left==null && root.right==null) return true;
    // else if(root.left!=null && root.right==null) return true;
    // else if(root.right!=null && root.left==null) return true;
    // else return isBalanced(root.left) && isBalanced(root.right);

    if(Math.abs(maxDepth(root.left)-maxDepth(root.right))<=1)
    {
        return isBalanced(root.left) && isBalanced(root.right);
    }
    return false;

    

};
// @lc code=end

