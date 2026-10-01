class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let items = s.split('');
        const map = { ')': '(', '}': '{', ']': '[' };
        for(const item of items){
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
