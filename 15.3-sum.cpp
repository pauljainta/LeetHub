/*
 * @lc app=leetcode id=15 lang=cpp
 *
 * [15] 3Sum
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
       // map<int,int> mymap;
        sort(nums.begin(),nums.end());
        int n=nums.size();
        // for(int i=0;i<n;i++)
        // {
        //     mymap[nums.at(i)]=0;
        // }
        int startMarker,endMarker;
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
                    if(a+b+c==0)
                    {
                        vector<int> v={a,b,c};
                        Triplets.push_back(v);
                       // startMarker++;
                       // endMarker--;
                        int x=nums.at(startMarker);
                        int y=nums.at(endMarker);

                        while(x==nums.at(startMarker))
                        {
                            startMarker++;
                           // if(startMarker>n-1) break;
                        }
                        while(y==nums.at(endMarker))
                        {
                            endMarker--;
                            
                        }

                    }
                    else if(a+b+c<0)
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

