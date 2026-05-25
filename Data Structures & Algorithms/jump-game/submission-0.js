class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        
        function jump(nums, index) {
            if (index === nums.length - 1) {
                return true;
            } else if (index >= nums.length || nums[index] === 0) {
                return false;
            }

            let val = nums[index];

            while (val > 0) {
                if (jump(nums, index + val)) {
                    return true;
                };
                val--;
            }
            return false;
        }

        return jump(nums, 0);
    }
}
