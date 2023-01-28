class Solution {
    public void moveZeroes(int[] nums) {
        if (nums.length == 1) {
            return;
        }
        int zeroCount = 0;
        int k = 0;
        for(int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) zeroCount ++;
            else nums[k++] = nums[i];
        }
        for(int i = nums.length - 1; i >= nums.length  - zeroCount ; i--) {
            nums[i] = 0;
        }

    }
}