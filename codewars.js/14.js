function toJadenCase (str) {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
    }
    return arr.join(' ')
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))