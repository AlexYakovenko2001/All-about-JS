
function descendingOrder(n){
 let arr = n.toString().split('').map(el => Number(el)).sort().reverse().join('');
 return Number(arr)
}

console.log(descendingOrder(51877))