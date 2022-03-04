var sortedSquares = function (nums) {
  /* The best approach for O(n) would be to use the two poitner method 
        1. Create new array and fill in with 0 (for now)
        2. Create a left and right pointer
        3. Create a result index to place largest compared square
        4. Create logic to select between the two compared squares then store inside              result index.
    */

  const resultArray = new Array(nums.length).fill(0);
  let leftIndx = 0;
  let rightIndx = nums.length - 1;
  let resultIndx = nums.length - 1;

  while (leftIndx < rightIndx) {
    let leftVal = Math.pow(nums[leftIndx], 2);
    let rightVal = Math.pow(nums[rightIndx], 2);

    if (leftVal < rightVal) {
      resultArray[resultIndx] = rightVal;
      rightIndx--;
    } else {
      resultArray[resultIndx] = leftVal;
      leftIndx++;
    }
    resultIndx--;
  }
  return resultArray;
};
