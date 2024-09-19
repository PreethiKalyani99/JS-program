function filterOddNumbers(arr){
    return arr.filter(item => item % 2 !== 0)
}
const arr =  [12,1,45,22,77,45,45,8,0]
console.log(filterOddNumbers(arr))