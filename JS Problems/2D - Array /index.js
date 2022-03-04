function hourglassSum(arr) {
  /* Think of this question as 6 arrays insisde one big array
        1. Create maxSum variable should be equal -63
        2. Then loop through both rows and colums 3 times (or until 4)
            a.Then creat three seperate variables to hold sperate sums of hourglass (top, middle, bottom)
        3. Find the currentSum of the hourglass variables  (add top,mid,bot)
        4. Compare the maxSum with the currentSum to find highest value
    */
  let maxSum = -63;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let mid = arr[i + 1][j + 1];
      let bot = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      let currentSum = top + mid + bot;
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}
