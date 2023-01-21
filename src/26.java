class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int element = nums[0];
        int placeInd = 0;
        int i = 0;
        while(true) {
            i++;
            if (i == nums.length) break;
            if (nums[i] != element) {
                placeInd = placeInd + 1;
                nums[placeInd] = nums[i];
                element = nums[i];
            }

        }
        return placeInd + 1;
    }
}