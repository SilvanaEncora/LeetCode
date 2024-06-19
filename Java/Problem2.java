class Solution {
    public int minPatches(int[] nums, int n) {
        long currentSum = 1;
        int patches = 0;
        int i = 0;
        
        while(currentSum <= n) {
            if (i < nums.length && nums[i] <= currentSum) {
                currentSum += nums[i];
                i++;
            } else {
                currentSum += currentSum;
                patches++;
            }
        }
        return patches;
    }
}