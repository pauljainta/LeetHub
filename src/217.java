import java.util.HashMap;
class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Boolean> hasSeen = new HashMap<Integer, Boolean>();
        for (int num:nums) {
            if (hasSeen.get(num) == null) {
                hasSeen.put(num, true);
            } else {
                return true;
            }
        }
        return false;
    }
}