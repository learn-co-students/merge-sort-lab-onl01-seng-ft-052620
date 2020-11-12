function findMinAndRemoveSorted(array){
    let min = Math.min(...array)
    let index = array.indexOf(min)
    array.splice(index, 1)
    return min
}

function merge(array1, array2){
    let len = array1.length + array2.length
    let combined = array1.concat(array2)
    let sorted = []
    while (sorted.length < len){
        let num = findMinAndRemoveSorted(combined)
        sorted.push(num)
    } 
    return sorted
}

function mergeSort(array){
    let len = array.length
    let sorted = []
    while (sorted.length < len){
        let num = findMinAndRemoveSorted(array)
        sorted.push(num)
    } 
    return sorted
}