class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        const curr = [];
        const track = Array(nums.length).fill(false);

        function search() {
            if (curr.length === nums.length) {
                result.push([...curr]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if(!track[i]) {
                    track[i] = true;
                    curr.push(nums[i]);
                    search();
                    track[i] = false;
                    curr.pop();
                }
            }
            
        }

        search();
        return result;
    }
}
