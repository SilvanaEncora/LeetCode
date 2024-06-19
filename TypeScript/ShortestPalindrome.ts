/**
 * Returns the shortest possible string that can be concatenated to the end of the input string to make it a palindrome.
 *
 * @param {string} s - The input string to check for palindrome.
 * @return {string} The shortest possible string to concatenate to the end of the input string to make it a palindrome.
 */
function shortestPalindrome(s: string): string {
  const len = s.length;

  let reversed = "";
  for (let i = 0; i < len; i++) reversed = s[i] + reversed;

  let offset = 0;
  while (offset <= len) {
    // We just need the outer side from the left
    const right = s.substring(0, len - offset);
    // const left = s.substring(offset);

    // Only check right to keep the reversed at left
    if (reversed.endsWith(right)) {
      return reversed + s.substring(len - offset);
    }

    // This would also work, but is not needed in this problem
    // if (reversed.startsWith(left)) {
    //   return s.substring(0, offset) + reversed;
    // }

    offset++;
  }

  return reversed + s;
}
