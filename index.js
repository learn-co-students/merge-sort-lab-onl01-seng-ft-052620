const findMinAndRemoveSorted = (array) => {
    return array.shift()
}   

const merge = (firstArray, secondArray) => {
    let sorted = [];

    while(firstArray.length != 0 && secondArray.length != 0){
        if(firstArray[0] < secondArray[0]){
          sorted.push(findMinAndRemoveSorted(firstArray))
        } else {
          sorted.push(findMinAndRemoveSorted(secondArray))
        }
    }
    return sorted.concat(firstArray).concat(secondArray)
}

const mergeSort = (array) => {
    let splitHalf = array.length/2;
    let firstHalf = array.slice(0, splitHalf);
    let secondHalf = array.slice(splitHalf, array.length);
    let sorted;

    if (array.length < 2) {
        return array;
    } else [
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    ]

    return sorted;
}