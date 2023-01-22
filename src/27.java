class Solution {
    public int removeElement(int[] nums, int val) {
        if (nums.length == 0) return 0;
        if(nums.length == 1) {
            if (nums[0] == val) return 0;
            else return 1;
        }
        int count = 0;
        int stop = nums.length;
        for (int i = 0; i < stop; i++) {
            if (nums[i] == val) {
                count ++;
                for(int j = i; j < stop - 1; j++) {
                    nums[j] = nums[j+1];
                }
                stop --;
            }
            if (nums[i] == val) {
                i--;
            }
        }
        return nums.length - count;
    }
}