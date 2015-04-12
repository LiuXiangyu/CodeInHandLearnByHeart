function createComparisonFunction(properyName) {
    return function(object1, object2) {
        var value1 = object1[properyName];
        var value2 = object2[properyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}
