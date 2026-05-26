class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b)=> a-b);
        const result = [];
        const curr = [];

        function search(index, remaining){
            if (remaining === 0) {
                result.push([...curr]);
                return;
            }
            if(index === candidates.length || remaining < 0){
                return;
            }
            curr.push(candidates[index]);
            search(index + 1, remaining - candidates[index]);
            let next = index + 1
            while (next < candidates.length && candidates[index] === candidates[next]) {
                next++;
            }
            curr.pop();
            search(next, remaining);
        }

        search(0, target);
        return result;
    }
}
