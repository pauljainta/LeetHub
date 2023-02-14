class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int count = 0;
        int max = 0;
        int i = 0;
        while(i < nums.length) {
            if (nums[i] == 1) {
                count ++;
            }
            if(nums[i] == 0 || i == nums.length -1 ) {
                if (count > max) {
                    max = count;
                }
                count = 0;
            }
            i++;
        }
        return max;
    }
}
