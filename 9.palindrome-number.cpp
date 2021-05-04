/*
 * @lc app=leetcode id=9 lang=cpp
 *
 * [9] Palindrome Number
 */

// @lc code=start
class Solution {
public:
    bool isPalindrome(int x) {

        string s;
        stringstream ss;
        ss << x;  
        ss >> s;
        bool isPall=true;

        int arr[s.length()][s.length()];

        for(int i=0, j=s.length()-1;i<=j;i++,j--)
        {
            
            if(s[i]!=s[j])
            {
                isPall=false;
            }

        }

        return isPall;
    
        
    }
};
// @lc code=end

