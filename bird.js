function countDistinctPairs(bids, target) {
    var count = 0;
    var uniqueValues = new Set(bids);
    for (var i = 0; i < bids.length; i++) {
        var currentBid = bids[i];
        var desiredBid1 = currentBid + target;
        var desiredBid2 = currentBid - target;
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

var bids = [1, 2, 3, 4, 10, 11];
var target = 1;
console.log(countDistinctPairs(bids, target)); // Output: 5

