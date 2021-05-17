/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
    if(root==null) return 0;
    else if(root.left==null && root.right==null) return 1;
    else if(root.left!=null && root.right==null) return 1+minDepth(root.left);
    else if(root.right!=null && root.left==null) return 1+minDepth(root.right);

    else return Math.min(1+minDepth(root.left),1+minDepth(root.right));

};
// @lc code=end

