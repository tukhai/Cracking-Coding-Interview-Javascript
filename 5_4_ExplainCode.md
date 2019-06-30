<strong>What does it mea n if A & B == 0?<strong> It means that A and B never have a 1bit in the same place. So if n & (n-1) == 0,then n and n-1 never share a 1.<br>
If n & (n-1) == 0, then n and n-1 never share a 1.<br><br>

Thus, n-1 will look like n, except that n's initial Os will be 1s in n-1, and n's least significant 1 will be a 0 in n-1. That is:<br>
if n = abcde1000<br>
then n-1 = abcdeO111<br><br>

n and n-1 must have no 1 s in common<br>
abcde must be all Os, which means that n must look like this: 00001000. The value n is therefore a power of 2 (n can be 0 also).

