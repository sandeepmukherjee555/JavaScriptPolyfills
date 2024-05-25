Array.prototype.customFilter = function (cb) {
    let result = [];
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index])) result.push(this[index])
    }
    return result;
}

console.log([1, 2, 3, 4, 5].customFilter(item => item > 2));
console.log([10, 20, 30, 40, 50].customFilter(item => item < 50));