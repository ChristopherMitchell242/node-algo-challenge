/*
A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

*/

// 1,1,2,2,3,3,4,5,5,6,6,7,7 => 4
// 1,2,2,3,3,4,4,5,5 => 1
// 1,1,2,2,3 => 3

function findUniqueValue(data) {
    let uniqueValue;
    while (!uniqueValue || data.length > 1) {
        let candidateValue = data.shift(); // takes the first value from the array and removes from array
        data.includes(candidateValue) ? 
            data = data.filter((datum) => !(datum === candidateValue)) : uniqueValue = candidateValue;
    }
    return uniqueValue;
}

function solution(A) {
    return findUniqueValue(A)
}