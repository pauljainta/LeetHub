/*
 * @lc app=leetcode id=5 lang=cpp
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
class Solution {

    // bool CheckPallindrome(int i,int j,string str)
    // {

    //     bool flag = true;
 
    //         // Check palindrome
    //     for (int k = 0; k < (j - i + 1) / 2; k++)
    //         if (str[i + k] != str[j - k])
    //             flag = false;

    //     return flag;        
 
    // }
public:
    string longestPalindrome(string s) {
        int arr[s.length()][s.length()];
        for(int i=0;i<s.length();i++)
        {
            for(int j=0;j<s.length();j++)
            {
                arr[i][j]=0;
            }
        }

        string longestPall=s.substr(0,1);

        for(int i=0;i<s.length();i++)
        {
            arr[i][i]=1;
            if(i!==s.length()-1)
            {
                if(s[i]==s[i+1])
                {
                    arr[i][i+1]=2;
                    longestPall=s.substr(i,2);
                }
                else arr[i][i+1]=0;
            }
        }

        for(int i=1;i<s.length();i++)
        {
            for(int j=0;j<s.length();j++)
            {
                int k=i+1;
                if(j+k<s.length())
                {
                    if(s[j]==s[j+k] && arr[j+1][k-1]!=0)
                    {
                        arr[j][j+k]=2+arr[j+1][k-1];
                        longestPall=s.substr(j,k+1);
                    }
                }
            }
        }

        return longestPall;
        
        // for(int i=0;i<s.length()-1;i++)
        // {
        //     // for(int j=2;j<s.length()-i;j++)
        //     // {
        //     //     if(s[i]==s[i+j] && arr[i+1][j-1]!=0)
        //     //     {
        //     //         arr[i][i+j]=arr[i+1][j-1]+j
        //     //     }
        //     // }
        //     if(s[i]==s[i+j] && arr[i+1][j-1]!=0)
        //     {
        //         arr[i][i+j]=arr[i+1][j-1]+2;
        //     }



        // }

       
        


        // string longestPall=s.substr(0,1);
    
        // int maxLength = 1;
 
 
        // for (int i = 0; i < s.length(); i++) {
        //     for (int j = i; j < s.length(); j++) {
            
        //         if (CheckPallindrome(i,j,s) && (j - i + 1) > maxLength) {
        //             //start = i;
        //             maxLength = j - i + 1;
        //             longestPall=s.substr(i,maxLength);

        //         }
        //     }
        // }
 
        // return longestPall;
        
    }
};
// @lc code=end

