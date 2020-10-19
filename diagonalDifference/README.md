<h1>
For diagonal-1

A> For above example array,the elements across diagonal1 is [1, 5, 9] . So  the first element (i.e. 1) of diagonal which is matrix[1st element of outer array][first element of inner array] — in JS code which is arr[0][0].



B> The second element (i.e. 5) > which is array[2nd element of outer array][2nd element of inner array] > in JS code this is arr[1][1]

So similarly ,starting from row index = 0, each element of the diagonal1 would be arr[row][row].

*/*Now for diagonal-2

A> The diagonal2 is [3, 5, 7]. So the first element (i.e. 3) >
which is array[First element of outer array][Last element of inner array] > In code which is arr[0][2]

B> Then the second element of diagonal2 (i.e. 5) would be >
array[Second element of outer array][Last but one element of inner array]
which is is arr[1][1]

C> Then the second element of diagonal2 (i.e. 7) would be >
array[Third element of outer array][First element of inner array]
which is is arr[2][0]

So the general rule, for getting the elements of diagonal, with each loop, I am incrementing the positional index values of the outer array starting from index=0; BUT for the inner array I am decrementing the positional-index values starting from innerArray.length-1 .

So for the diagonal2, for the innerArray, the problem is of finding the element position from the last element towards left, i.e. looping the innerArray from reverse position.

So overall my for loop iterations will give me the below index values for diagonal-2:
array.length = 3, i = 0 => we get the element (0, 3 — 0 — 1) = (0, 2)
array.length = 3, i = 1 => we get the element (1, 3 — 1 — 1) = (1, 1)
array.length = 3, i = 2=> we get the element (2, 3 — 2 — 1) = (2, 0)

Explanation of the part — arra[row][arr.length-row-1]
Generally whenever, I have reverse-loop an array , starting from its last element, I can do this
array.[array.length - index - 1]





Here, the argument “index” is the index of the current element being processed, ie. it will start form index=0 of the given original array.

So for the first iteration (index = 0 i.e. in this specific problem row = 0), it will give me > array.[array.length-1–0] > which is the last element of the array.

A> Then for the second loop, index-value (i.e. row value in this specific problem) will be 1, i.e. I am accessing the element (array.length — 1–1). That is the element at array.length — 2 position, i.e. the second-last position.
B> And this way, for the last loop, I will be accessing array[(array.length-(length-1)-1] element, i.e. the array[0] position’s element of the original array.

So, the following pseudo code for this problem would make more sense now.
Condition for Diagonal-1: The row-column condition is row = column.
Condition for Diagonal-2: The row-column condition is row = numberOfRows-column -1
</h1>








