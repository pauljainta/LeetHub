/*
 * @lc app=leetcode id=3 lang=cpp
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
class Solution {
public:
    vector<char> buffer;

    bool isInBuffer(char ch)
    {
        for (auto i = buffer.begin(); i !=buffer.end(); ++i)
        {
            if(ch==*i)
            {
                return true;
            }
        }
        return false;
    }
   
    
    int lengthOfLongestSubstring(string s) {
        
        int max_length=0;
        
        for(int i=0;i<s.length();i++)
        {
            buffer.push_back(s[i]);
            int length=1;

            for(int j=i+1;j<s.length();j++)
            {
                if(isInBuffer(s[j]))
                {
                    buffer.clear();
                    break;
                }
                buffer.push_back(s[j]);
                length++;

   
            }

            if(length>max_length) max_length=length;
        }



        return max_length;
        
    }
};
// @lc code=end

