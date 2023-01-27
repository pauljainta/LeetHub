import java.util.*;
class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> list = new ArrayList<String>();
        if (nums.length == 0) return list;
        int start = 0, end = 0;
        if (nums.length == 1) {
            list.add(nums[0] + "");
            return list;
        }
        for (int i = 1; i < nums.length; i++ ) {
            if (nums[i] == nums[i-1] + 1) {
                end = i;
                if (i == nums.length - 1) {
                    list.add(nums[start] + "->" + nums[end]);
                }
                continue;
            } else{
                if (start == end) {
                    list.add(nums[start] + "");
                } else {
                    list.add(nums[start] + "->" + nums[end]);
                }
                start = end = i;
                if (i == nums.length - 1) {
                    list.add(nums[start] + "");
                }
            }
        }
        return list;
    }
}