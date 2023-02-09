import java.util.*;
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap <Integer, Integer> map1 = new HashMap<Integer, Integer>();
        HashMap <Integer, Integer> map2 = new HashMap<Integer, Integer>();
        for (int num: nums1) {
            if (map1.containsKey(num)) {
                map1.put(num, map1.get(num) + 1);
            } else {
                map1.put(num, 1);
            }
        }
        int len = 0;
        for (int num: nums2) {
            if (map1.containsKey(num)) {
                if (map2.containsKey(num) && map2.get(num) < map1.get(num)) map2.put(num, map2.get(num) + 1);
                if (!map2.containsKey(num)) map2.put(num, 1);
            }
        }
        for (Map.Entry<Integer, Integer> entry : map2.entrySet()) {
            len = len + entry.getValue();
        }
        int [] arr = new int[len];
        int index = -1;
        for (Map.Entry<Integer, Integer> entry : map2.entrySet()) {
            for (int i = 0; i < entry.getValue(); i++) {
                arr[++index] = entry.getKey();
            }
        }
        return arr;
    }
}