class NumArray {
    int numArray[];
    public NumArray(int[] nums) {
        this.numArray = new int[nums.length];
        for (int i = 0; i< nums.length; i++) {
            this.numArray[i] = nums[i];
        }
    }

    public int sumRange(int left, int right) {
        int sum = 0;
        for (int i = left; i <= right; i++) {
            sum = sum + this.numArray[i];
        }
        return sum;
    }
