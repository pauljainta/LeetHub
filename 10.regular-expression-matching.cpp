/*
 * @lc app=leetcode id=10 lang=cpp
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
class Solution {
public:
    bool isMatch(string s, string p) {
        // int l=s.length();
        // if(s[l-2]=="." && s[l-1]=="*") return true;
        if (regex_match (s, regex(p))) return true;

        return false;
        

        
    }
};
// @lc code=end

