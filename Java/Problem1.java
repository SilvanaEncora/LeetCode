class Solution {
    public int maxProfit(int[] prices) {
        if(prices == null || prices.length < 2){
            return 0;
        } else {
            int size = prices.length, minPrice = prices[0], maxPrice = prices[size-1], maxTotalProfit = 0;
            int[] maxProfit1 = new int[size];
            int[] maxProfit2 = new int[size];

            for(int i=0; i<size; i++){
                minPrice = Math.min(minPrice, prices[i]);
                if(i == 0)
                    maxProfit1[i] = Math.max(maxProfit1[i], prices[i] - minPrice);
                else
                    maxProfit1[i] = Math.max(maxProfit1[i-1], prices[i] - minPrice);
            }

            for(int i=size-2; i >= 0; i--){
                maxPrice = Math.max(maxPrice, prices[i]);
                maxProfit2[i] = Math.max(maxProfit2[i+1], maxPrice - prices[i]);
            }

            for(int i=0; i<size; i++){
                maxTotalProfit = Math.max(maxTotalProfit, maxProfit1[i] + maxProfit2[i]);
            }
            
            return maxTotalProfit;
        }
    }
}