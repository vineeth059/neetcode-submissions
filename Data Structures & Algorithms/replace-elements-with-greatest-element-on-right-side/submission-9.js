class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxItem = -1;
        const temp = new Array(arr.length);
        for(let i = arr.length-1; i>=0; i--) {
            temp[i] = maxItem;
            maxItem = Math.max(maxItem, arr[i]);
        }
        return temp;
    }
}
