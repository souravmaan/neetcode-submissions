class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const result = [];
        // i can either add the element or skip it
        function trav(index, arr) {
            if(index === nums.length) {
                result.push(arr);
                return;
            }
            trav(index + 1, [...arr, nums[index]]);
            trav(index + 1, arr);
        }
        trav(0, []);
        console.log(result);
        return result;
    }
}
