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
        int closestSum,diff=99999;
        //vector<vector<int>> Triplets;
        for(int i=0;i<n-2;i++)
        {
            int a,b,c;
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
                     a=nums.at(i);
                     b=nums.at(startMarker);
                     c=nums.at(endMarker);
                    if(a+b+c==target)
                    {
                        closestSum=target;
                        diff=0;
                        break;
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

                    }
                    else
                    {
                        if(abs(a+b+c-target)<=diff)
                        {
                            diff=abs(a+b+c-target);
                            closestSum=a+b+c;
                        }
                        if(a+b+c<target) startMarker++;
                        else endMarker--;  
                    }    
                  //  else endMarker--;  

                    if(startMarker>n-1) break;  
                    if(endMarker<0) break;    
                }
            }

            if(a+b+c==target) break;
        }
        
   
        return closestSum;
        
    }
};
// @lc code=end

