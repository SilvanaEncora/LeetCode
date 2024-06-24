class Solution {
    public String shortestPalindrome(String s) {
        //First, we reverse the original string s
        String reversed = new StringBuilder(s).reverse().toString();
        //Then, we iterate on every character of the reversed string
        //Excluding more characters with each iteration, and checking if the original string
        //begins with this new substring, if it does, it means that at that point it is a palindrome, and we just need to add the exluded characters to the beginning of the orignal string
        for(int i = 0;i<=reversed.length();i++){
            if(s.startsWith(reversed.substring(i))){
                reversed = reversed.substring(0,i)+s;
                break;
            }
        }
        return reversed;
    }
}