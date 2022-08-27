const reverseSeq = n => {
    let arr = [];
    for (let i = 0; i < n; n--) {
        arr.push(n)
    }
    return arr
};

console.log(reverseSeq(6))