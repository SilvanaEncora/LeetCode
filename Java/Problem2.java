class Solution {
    public int minPatches(int[] nums, int n) {
        long maxSum = 1;
        int patches = 0;
        int i = 0;
        
        while(maxSum <= n) {
            if (i < nums.length && nums[i] <= maxSum) {
                maxSum += nums[i];
                i++;
            } else {
                maxSum += maxSum;
                patches++;
            }
        }
        return patches;
    }
}