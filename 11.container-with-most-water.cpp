/*
 * @lc app=leetcode id=11 lang=cpp
 *
 * [11] Container With Most Water
 */

// @lc code=start
class Solution {
public:
    int AreaBetween(int index_1,int index_2,int height)
    {
        return abs(index_1-index_2)*height;
    }
    int maxArea(vector<int>& height) 
    {
        int max=0;
        for(int i=0;i<height->size();i++)
        {
            for(int j=0;j<height->size();j++)
            {
                if(i!=j && height->at(j)>=height->at(i) && AreaBetween(i,j,height->at(i)>max)
                {
                    max=AreaBetween(i,j,height->at(i);
                }
            }
        }
        return max;
    }
};
// @lc code=end

