let flattenObjectValues = []

function filterEvenNumbers(obj){
    let objValues = Object.values(obj)
    if(objValues.length > 0){
        for(let i = 0; i < objValues.length; i++){
            if(typeof objValues[i] === 'object'){
                filterEvenNumbers(objValues[i])
            }
            else if(typeof objValues[i] === 'number' && (objValues[i] % 2 === 0)){
                flattenObjectValues.push(objValues[i])
            }
        }
    } 
    return flattenObjectValues
}

const obj = {  "a": 2,  "b": {"x": 4, "y": {"foo": 3, "z": {"bar": 2}}},  "c": {"p": {"h": 2, "r": 5}, "q": 'ball', "r": 5},  "d": 1,  "e": {"nn": {"lil": 2}, "mm": 'car'}}
console.log(filterEvenNumbers(obj))