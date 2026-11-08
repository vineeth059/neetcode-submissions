class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return this.isPalindromeRange(s, left + 1, right) || this.isPalindromeRange(s, left, right - 1);
            }
        }
        return true;
    }

    /**
     * @param {string} s
     * @param {number} left
     * @param {number} right
     * @return {boolean}
     */
    isPalindromeRange(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
