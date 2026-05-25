class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        
        function search(index, currSum, currSet) {
            if(currSum === target) {
                result.push(currSet);
                return;
            }
            if(index === nums.length || currSum > target) {
                return;
            }
            // add element and same index
            search(index, currSum+nums[index], [...currSet, nums[index]]);
            search(index + 1 , currSum, currSet);
        }

        search(0, 0, []);
        return result;
    }
}
