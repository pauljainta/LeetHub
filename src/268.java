class Solution {
    public int missingNumber(int[] nums) {
        int sum = 0;
        int max = nums.length;
        for(int num:nums) {
            sum += num;
        }
        int sumShouldBe = (max * (max + 1))/2;
        return sumShouldBe - sum;
    }
}