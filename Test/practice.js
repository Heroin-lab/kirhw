
// 1  task 
var arrayMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var objMonths = {
    January: arrayMonths[0],
    February: arrayMonths[1],
    March: arrayMonths[2],
    April: arrayMonths[3],
    May: arrayMonths[4],
    June: arrayMonths[5],
    July: arrayMonths[6],
    August: arrayMonths[7],
    September: arrayMonths[8],
    October: arrayMonths[9],
    November: arrayMonths[10],
    December: arrayMonths[11],
}

function getDays (year, month) {
    if ((year && month) === undefined){
        return 'error'
    }
    if (year % 4 === 0 && (month === 2 || month === 'February')){
        return 29;
    } else if (typeof month === 'number'){
        return arrayMonths[month - 1];
    } else {
        return objMonths[month];
    }
}
// console.log(getDays(2021, 'February'));

// 2 task

Number.prototype.isOdd = function() {
    return this % 2 !== 0 ? true : false;
 }

 var even = 10;
 var odd = 9;
 
//  console.log(even.isOdd());
//  console.log(odd.isOdd());

module.exports = {
    getDays,
    isOdd:Number.prototype.isOdd,
};