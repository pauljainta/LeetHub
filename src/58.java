class Solution {
    public int lengthOfLastWord(String s) {
        if (s.length() == 1 && s.charAt(0) == ' ') return 0;
        if (s.length() == 1 && s.charAt(0) != ' ') return 1;

        int last = s.length() - 1;
        while(s.charAt(last) == ' ') {
            // if (last == 0) {
            //     return s.length();
            // }
            last --;
        }
        if(last == 0) return 1;

        int second_last = last;
        while(s.charAt(second_last) != ' ' ) {
            if (second_last == 0) {
                return last - second_last + 1;
            }
            second_last --;
        }

        return last - second_last;

    }
}