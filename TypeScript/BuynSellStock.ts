/**
 * Returns the max profit over all possible transactions with an given array of stock prices
 *
 * @param prices - array of stock prices to buy and sell
 * @returns {number} max profit over all possible transactions
 */
function profit(prices: number[]): number {
  let fromLeft: number[] = [0];
  let fromRight: number[] = [0];
  let min = prices[0];
  let max = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // Keep previous profit
    fromLeft[i] = fromLeft[i - 1];
    // Unless new minimum is found and profit is higher
    if (prices[i] < min) min = prices[i];
    if (fromLeft[i] < prices[i] - min) fromLeft[i] = prices[i] - min;
  }

  for (let i = 0; i < prices.length; i++) {
    // Keep previous profit
    fromRight[i] = fromRight[i - 1] || 0;
    const backindex = prices.length - 1 - i;
    // Unless new max is found and profit is higher
    if (prices[backindex] > max) max = prices[backindex];
    if (fromRight[i] < max - prices[backindex])
      fromRight[i] = max - prices[backindex];
  }

  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const backindex = prices.length - 1 - i;
    if (fromLeft[i] + fromRight[backindex] > maxProfit)
      maxProfit = fromLeft[i] + fromRight[backindex];
  }
  return maxProfit;
}
