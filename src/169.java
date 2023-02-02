import java.util.*;
class Solution {
    public int majorityElement(int[] nums) {
        HashMap <Integer, Integer> map = new HashMap <Integer, Integer> ();
        for (int num: nums) {
            if (map.containsKey(num)) {
                map.put(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }
        for (Map.Entry<Integer, Integer> entry: map.entrySet()) {
            if (entry.getValue() > Math.floor(nums.length/2)) {
                return entry.getKey();
            }
        }
        return -1;

    }
}