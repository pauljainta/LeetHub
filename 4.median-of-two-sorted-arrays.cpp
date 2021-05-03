/*
 * @lc app=leetcode id=4 lang=cpp
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
class Solution {

public:
    vector<int> MergeArray(vector<int>& v1,vector<int>& v2)
    {
        vector<int> v3;

	    int i, j, n, m;
	    i = j = 0;
	    n = v1.size();
	    m = v2.size();


	// traverse each elemenst of v1 and v2
	    while (i < n && j < m) {

	
		    if (v1[i] <= v2[j]) {
			    v3.push_back(v1[i]);
			    ++i;
		    }
		    else {
			    v3.push_back(v2[j]);
			    ++j;
		    }

	    }

	// push the elements left in v1 to v3
	    while (i < n) {
	    	v3.push_back(v1[i]);
	    	++i;
	    }

	// push the elements left in v2 to v3
	    while (j < m) {
		    v3.push_back(v2[j]);
		    ++j;
    	}

	    return v3;


    }
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> nums3=MergeArray(nums1,nums2);
        double median;
        if(nums3.size()%2==0)
        {
            int index1=(nums3.size()/2)-1;
            int index2=nums3.size()/2;
           // median=(nums3[index1]+nums3[index2])/2;
           median=-1;
        }
        else
        {
            int index=(nums3.size()-1)/2;
            median=nums3[index];
        }

        return median;

        
    }
};
// @lc code=end

