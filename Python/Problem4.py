# Shortest Palindrome 

# Returns the shortest palindrome created by transforming a string s 
# by adding characters in front of it.

# As a parameter it receives the string s, which will be transformed.
# As a return value the palindrome is returned.

class Solution:
    def shortestPalindrome(self, s):
        n = len(s)
        i = 0
        for j in range(n - 1, -1, -1):
            if s[i] == s[j]:
                i += 1
        if i == n: # checks if the entire string is a palindrome
            return s
        remainingStr = s[i:]
        revRemaining = remainingStr[::-1]
        return revRemaining + self.shortestPalindrome(s[:i]) + remainingStr
