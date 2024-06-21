import bisect

class Solution(object):
    def minPatches(self, nums, n):
        max_sums = 0  # Current max sum we can cover
        i = 0  # Index in nums
        n_patch = 0  # Number of patches needed

        while max_sums < n:
            # If the next number in nums is within the current range
            if i < len(nums) and nums[i] <= max_sums + 1:
                max_sums += nums[i]
                i += 1
            else:
                # Add the smallest number (max_sums + 1) that cannot be covered
                max_sums += max_sums + 1
                n_patch += 1
                
                print(f"n: {i}, npatch: {n_patch}, max_sum: {max_sums}")

        return n_patch

# Example usage
a = Solution()
#print(a.minPatches([1, 2, 31, 33], 2147483647))
a.minPatches([10,30,36,42,50,76,87,88,91,92], 54)