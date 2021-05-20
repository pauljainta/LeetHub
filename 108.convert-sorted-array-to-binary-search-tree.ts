/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

function constructTree(nums:number[],low:number,high:number):TreeNode
{
    let mid=Math.floor(low+(high-low)/2);
    if(low>high) return null;

    let Node=new TreeNode(nums[mid]);
    Node.left=constructTree(nums,low,mid-1);
    Node.right=constructTree(nums,mid+1,high);

    return Node;

};

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return constructTree(nums,0,nums.length-1);

};
// @lc code=end

