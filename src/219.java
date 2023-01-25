import java.lang.Math;
import java.util.*;
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if (nums.length == 0 && nums.length == 1) return false;
        boolean isFound = false;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer> ();
        for(int i = 0; i < nums.length; i++) {
            if(!map.containsKey(nums[i])) {
                map.put(nums[i], i);
            } else {
                int j = map.get(nums[i]);
                if (Math.abs(i-j) <= k) {
                    isFound = true;
                } else {
                    map.put(nums[i], i);
                }
            }
        }
        return isFound;
    }
}