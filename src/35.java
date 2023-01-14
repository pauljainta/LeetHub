/**
 * Problem 35. Search Insert Position
 */
class Solution {

    public int binarySearch(int [] nums, int low, int high, int target) {
        // if (low > high) return -1;
        int mid = (low + high)/2;
        if (nums[mid] == target) {
            return mid;
        }
        if (high == low) {
            if (nums[high] > target) return high;
            else return high + 1;
        }
        if (nums[mid] < target) {
            return binarySearch(nums, mid + 1, high, target);
        }
        if(nums[mid] > target) {
            return binarySearch(nums, low, mid, target);
        }

        return -1;

    }
    public int searchInsert(int[] nums, int target) {
        return binarySearch(nums, 0,nums.length - 1, target);
    }
}