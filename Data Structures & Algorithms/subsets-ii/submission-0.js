class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b)=> a-b);

        const result = [];
        const curr = [];
        function subSet(index) {
            if(index >= nums.length) {
                result.push([...curr]);
                return;
            }

            curr.push(nums[index]);
            subSet(index + 1);
            curr.pop()
            let next = index + 1;
            while(nums[next]=== nums[index]) {
                next++;
            }
            subSet(next);
        }

        subSet(0);
        return result;
    }
}
