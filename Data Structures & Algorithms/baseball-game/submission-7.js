class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        
        for(let i =0; i< operations.length; i++){
            const op = operations[i];
            if(op == "+"){
                record.push(record[record.length-1]+record[record.length-2]);
            } else if(op == "C"){
                record.pop();
            } else if(op == "D"){
                const lastVal = record[record.length-1];
                record.push(2*lastVal);
            } else {
                record.push(Number(op));
            }
        }
        return record.reduce((total, num) => total + num, 0);
    }
}
