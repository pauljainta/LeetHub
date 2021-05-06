/*
 * @lc app=leetcode id=16 lang=cpp
 *
 * [16] 3Sum Closest
 */

// @lc code=start
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());
        int n=nums.size();
        int startMarker,endMarker;
        int closetSum;
        vector<vector<int>> Triplets;
        for(int i=0;i<n-2;i++)
        {
            if(i>0 && nums.at(i)==nums.at(i-1))
            {
                continue;
            }
            else
            {
                startMarker=i+1;
                endMarker=n-1;
                while(startMarker<endMarker)
                {
                    int a=nums.at(i);
                    int b=nums.at(startMarker);
                    int c=nums.at(endMarker);
                    if(a+b+c==target)
                    {
                        // vector<int> v={a,b,c};
                        // Triplets.push_back(v);
                        // int x=nums.at(startMarker);
                        // int y=nums.at(endMarker);

                        // while(x==nums.at(startMarker))
                        // {
                        //     startMarker++;
                        //     if(startMarker>n-1) break;
                        // }
                        // while(y==nums.at(endMarker))
                        // {
                        //     endMarker--;
                        //     if(endMarker<0) break; 
                            
                        // }
                        closetSum=target;

                    }
                    else if(a+b+c<target)
                    {
                        startMarker++;
                    }    
                    else endMarker--;  

                    if(startMarker>n-1) break;  
                    if(endMarker<0) break;    
                }
            }
        }
        
   
        return Triplets;
        
    }
};
// @lc code=end

