const removeFromArray = function(arr, ...elemsToRemove) {
    return arr.filter(item => !elemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
