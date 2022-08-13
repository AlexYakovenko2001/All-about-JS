function highAndLow(numbers){
    let arr = numbers.split(' ').map( el => Number(el) )
    return (Math.max(...arr) + ' ' + Math.min(...arr))
}

