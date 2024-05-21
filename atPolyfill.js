Array.prototype.customAt = function (index) {
    if (index < 0) return this[this.length + index];
    if (index >= this.length || index < 0) return;
    return this[index];
}

const a = [1, 3, 4, 5, 6];

console.log(a.customAt(3));
console.log(a.customAt(-1));