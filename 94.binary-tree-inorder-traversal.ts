/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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
let InorderNodeLists:number[];

function InOrderUtil(root:TreeNode):void
{
    if(root==null) return;
    InOrderUtil(root.left);
    InorderNodeLists.push(root.val);
    InOrderUtil(root.right);
    


};

function inorderTraversal(root: TreeNode | null): number[] {

    if(root==null) return [];

    InorderNodeLists=[];

    InOrderUtil(root);

    return InorderNodeLists;



};
// @lc code=end

