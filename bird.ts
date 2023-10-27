function countDistinctPairs(bids, target) {
  let count = 0;
  let uniqueValues = new Set(bids);

  bids = [1, 2, 3, 4, 10, 11];
  target = 1;

  for (let i = 0; i < bids.length; i++) {
    let currentBid = bids[i];
    let desiredBid1 = currentBid + target;
    let desiredBid2 = currentBid - target;

    if (uniqueValues.has(desiredBid1)) {
      count++;
    }

    if (uniqueValues.has(desiredBid2) && desiredBid2 !== desiredBid1) {
      count++;
    }

    uniqueValues.delete(currentBid);
  }

  return count;
}

console.log(countDistinctPairs(bids, target)); // Output: 5

