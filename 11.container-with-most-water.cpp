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
    int min(int a ,int b)
    {
        if(a>=b) return b;
        return a;

    }
    int maxArea(vector<int>& height) 
    {
        int maxA=AreaBetween(0,height.size()-1,min(height.at(0),height.at(height.size()-1)));

        int startPointer=0,endPointer=height.size()-1;

        while(startPointer<endPointer)
        {
            if(min(height.at(startPointer),height.at(endPointer))==height.at(startPointer))
            {
                startPointer++;
                
            }
            else
            {
                endPointer--;

            }

            if(AreaBetween(startPointer,endPointer,min(height.at(startPointer),height.at(endPointer)))>maxA)
            {
                maxA=AreaBetween(startPointer,endPointer,min(height.at(startPointer),height.at(endPointer)));
            }
        }


        // for(int i=0;i<height.size();i++)
        // {
        //     for(int j=0;j<height.size();j++)
        //     {
        //         if(i!=j && height.at(j)>=height.at(i) && AreaBetween(i,j,height.at(i))>max)
        //         {
        //             max=AreaBetween(i,j,height.at(i));
        //         }
        //     }
        // }
        return maxA;
    }
};
// @lc code=end

