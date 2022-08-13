function squareDigits(num){
 let arr = num.toString().split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    }
    return Number(newArr.join(''))
}

console.log(squareDigits(546))