/**
 * 66. Plus One
 */

class Solution {
    public int[] plusOne(int[] digits) {
        if (digits[digits.length - 1] < 9) {
            digits[digits.length - 1] ++;
            return digits;
        }

        int carry = 1;

        for (int i = digits.length - 1 ; i >= 0; i--) {
            if (digits[i] + carry > 9) {
                carry = 1;
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + carry;
                carry = 0;
            }
        }

        if (carry == 1) {
            int mod_digits[] = new int[digits.length + 1];
            mod_digits[0] = 1;
            for (int i = 1; i< mod_digits.length; i++) {
                mod_digits[i] = digits[i-1];
            }
            return mod_digits;
        } else{
            return digits;
        }

    }
}