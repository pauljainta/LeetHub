/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function checkSymmetric(node1:TreeNode,node2:TreeNode):boolean
{
    if(node1==null && node2==null) return true;
    else if(node1==null) return false;
    else if(node2==null) return false;
    else if(node1.val!=node2.val) return false;
    else
    {
        return checkSymmetric(node1.left,node2.right) && checkSymmetric(node1.right,node2.left);
    }


};

function isSymmetric(root: TreeNode | null): boolean {
   // if(root.left==null && root.right==null) return false;
   return checkSymmetric(root.left,root.right);

};
// @lc code=end

