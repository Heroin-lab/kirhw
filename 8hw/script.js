

function tickets(arr) {
    var cash = {
        'b25': 0,
        'b50': 0,
        'b100': 0,
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 25){
            cash.b25 += 1;
        } else if (arr[i] === 50 && cash.b25 > 0){
            cash.b25 -= 1;
            cash.b50 += 1;
        } else if (arr[i] === 100 && cash.b50 > 0 && cash.b25 > 0){
            cash.b25 -= 1;
            cash.b50 -= 1;
            cash.b100 += 1;
        } else if (arr[i] === 100 && cash.b25 >= 3) {
            cash.b25 -= 3;
            cash.b100 += 1;
        } else {
            return false
        }
    }
    return true
}
    
// console.log(tickets([25, 25, 25, 100]));
// console.log(tickets([25, 50, 25, 100]));
// console.log(tickets([25, 50, 100]));
// console.log(tickets([100, 25, 25, 25]));

// 2 task \\ 

