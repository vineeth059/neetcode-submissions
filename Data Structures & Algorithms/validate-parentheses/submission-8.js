class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const len = s.length;
        if (len < 2 || len%2 != 0) {
            return false;
        }
        let stack = [];
        const map = { ')': '(', '}': '{', ']': '[' };
        for(const item of s){
            if(item === '(' || item === '{' || item === '['){
                stack.push(item);
            } else {
                if(stack.length === 0) return false;
                const poppedItem = stack.pop();
                if(poppedItem !== map[item]){
return false;
                }
            }
        }
        return stack.length === 0;
    }
}
