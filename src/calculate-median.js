function calculate_median(arr) {
    var newarr = searchEvenBits(arr);
    var median = searchMedian(newarr);
    return median;
}

function searchEvenBits(arr) {
    var newarr = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

function searchMedian(newarr) {
    var median;

    if (newarr.length % 2 === 0) {
        median = (newarr[newarr.length / 2 - 1] + newarr[newarr.length / 2]) / 2;
    }
    else {
        median = newarr[(newarr.length - 1) / 2];
    }

    return median;
}

module.exports = calculate_median;
