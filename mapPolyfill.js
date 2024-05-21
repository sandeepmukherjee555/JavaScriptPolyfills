Array.prototype.customMap = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i]));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.customMap((item) => item * item));
console.log(arr.customMap((item) => item + 1));