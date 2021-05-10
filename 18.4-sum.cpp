/*
 * @lc app=leetcode id=18 lang=cpp
 *
 * [18] 4Sum
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {

        sort(nums.begin(),nums.end());
        int n=nums.size();
        int startMarker,endMarker,middleMarker;
        vector<vector<int>> Quadraples;
        for(int i=0;i<n-3;i++)
        {
           
            if(i>0 && nums.at(i)==nums.at(i-1))
            {
                continue;
            }
            else
            {
                for(int j=i+1;j<n-2;j++)
                {
                    if(j>i+1 && nums.at(j)==nums.at(j-1))
                    {
                        continue;
                    }
                    startMarker=j+1;
                    endMarker=n-1;
                    while(startMarker<endMarker)
                    {
                        int a=nums.at(i);
                        int b=nums.at(j);
                        int c=nums.at(startMarker);
                        int d=nums.at(endMarker);
                        if(a+b+c+d==target)
                        {
                            vector<int> v={a,b,c,d};
                            Quadraples.push_back(v);
                            int x=nums.at(startMarker);
                            int y=nums.at(endMarker);

                            while(x==nums.at(startMarker))
                            {
                                startMarker++;
                                if(startMarker>n-1) break;
                            }
                            while(y==nums.at(endMarker))
                            {
                                endMarker--;
                                if(endMarker<0) break; 
                            
                            }

                        }
                        else if(a+b+c+d<target)
                        {
                            startMarker++;
                        }    
                        else endMarker--;  

                        if(startMarker>n-1) break;  
                        if(endMarker<0) break;    
                    }
                }
            }
        }
        
   
        return Quadraples;
        
    }
};
// @lc code=end

