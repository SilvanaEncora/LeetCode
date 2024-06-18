from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices or len(prices) <= 1:
            return 0
        
        n = len(prices)
        
        first_profit = [0] * n
        min_price = prices[0]
        
        for i in range(1, n):
            min_price = min(min_price, prices[i])
            first_profit[i] = max(first_profit[i - 1], prices[i] - min_price)
        
        second_profit = [0] * n
        max_price = prices[-1]
        
        for i in range(n-2, -1, -1):
            max_price = max(max_price, prices[i])
            second_profit[i] = max(second_profit[i + 1], max_price - prices[i])
        
        max_profit = 0
        for i in range(n):
            max_profit = max(max_profit, first_profit[i] + second_profit[i])
            
        return max_profit
    
sol = Solution()
test1 = [3,3,5,0,0,3,1,4]
test2 = [1,2,3,4,5]
test3 = [7,6,4,3,1]
test4 = [2, 4, 1]

print(sol.maxProfit(test1))
print(sol.maxProfit(test2))
print(sol.maxProfit(test3))
print(sol.maxProfit(test4))