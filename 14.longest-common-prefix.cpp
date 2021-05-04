/*
 * @lc app=leetcode id=14 lang=cpp
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
class Solution {
public:

    bool checkIfEqual(int position,vector<string>& strs)
    {
        bool isEqual=true;
        for(int i=0;i<(strs.size())-1;i++)
        {
            string s1=strs.at(i);
            string s2=strs.at(i+1);
            if(s1[position]!=s2[position])
            {
                isEqual=false;
            }
        }

        return isEqual;   
    }
    string longestCommonPrefix(vector<string>& strs) 
    {
        int vect_size=strs.size();
        string LCP="";
        int markerPosition=0;
        int minLength=201;
        for(int i=0;i<vect_size;i++)
        {
           if(strs.at(i).length()<minLength) minLength=strs.at(i).length();
        }

        for(int i=0;i<minLength;i++)
        {
            if(checkIfEqual(i,strs))
            {
                markerPosition++;
                string s=strs.at(0);
                LCP=s.substr(0,markerPosition);
            }
            else break;
        }

        

        return LCP;
    }
};
// @lc code=end

