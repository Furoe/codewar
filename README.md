##### Credit Card Mask
* solution: if cc.length <= 4, return cc;
			else backup the last 4 chars, replace cc with '#', then set the last 4 chars.  

##### Shortest Word
* solution: transform string to array, map the array then use Math.min to get the shortest.  

##### Decode Morse

##### Number of trailing zeros of N!
* solution: Every zero in the trail has a five, so find out one number can be devided by how many fives.
* Recrusion is a good way.

##### Sum of Numbers 0-N
* [solution](https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/solutions/javascript)

##### Calculate Parity Bit
* solution: replace '0' with '', then count number of '1'