class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if(n==0) {
            return;
        }
        if(m==0) {
            for (int i = 0; i < n; i++) {
                nums1[i] = nums2[i];
            }
            return;
        }
        int mod[] = new int[m+n];
        int pointer1 = 0, pointer2 = 0, i = 0;
        while (pointer1 != m && pointer2 != n) {
            if (nums1[pointer1] > nums2[pointer2]) {
                mod[i] = nums2[pointer2];
                pointer2 ++;
            } else {
                mod[i] = nums1[pointer1];
                pointer1 ++;
            }
            i++;
        }

        if(pointer1 == m) {
            for (int j = pointer2; j < n; j++) {
                mod[i] = nums2[j];
                i++;
            }
        }
        if(pointer2 == n) {
            for (int j = pointer1; j < m; j++) {
                mod[i] = nums1[j];
                i++;
            }
        }

        for (i = 0; i < m + n; i++) {
            nums1[i] = mod[i];
        }

    }
}