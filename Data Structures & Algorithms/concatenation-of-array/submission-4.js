class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        const newArr = new Array(len*2);
        for(let i=0; i< len; i++){
            newArr[i] = nums[i];
            newArr[i+len] = nums[i];
        }
        return newArr;
    }
}
