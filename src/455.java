import java.util.*;
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int i = 0; int j = 0; int cunt = 0;
        while(i < g.length && j < s.length)
        {
            if(s[j] >= g[i]) {
                cunt ++;
                i++;
                j++;
            }
            else if (s[j] < g[i]) {
                j++;
            }

        }
        return cunt;
    }
}