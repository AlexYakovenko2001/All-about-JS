function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m
    } else {
        return 0
    }
}
function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true
    } else {
        return false
    }
}