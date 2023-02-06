import java.util.*;
class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        HashSet<Integer> set = new HashSet<Integer> ();
        List<Integer> list = new ArrayList<Integer> ();
        for(int num : nums) {
            set.add(num);
        }
        for(int i = 1; i <= nums.length; i++) {
            if (!set.contains(i)) {
                list.add(i);
            }
        }
        return list;
    }
}