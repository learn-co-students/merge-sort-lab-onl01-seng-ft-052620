
//findMinAndRemoveSorted
// returns smallest element of an array
//removes smallest element from an array

function findMinAndRemoveSorted(arr) {
    let min = arr[0]
    let minIndex
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            minIndex = i
        }
    }
    arr.splice(minIndex, 1)
    return min
}



//merge should merge two sorted arrays to produce one sorted array
function merge(arr1, arr2) {
    let combinedArr = arr1.concat(arr2)
    let sortedArr = []
    while (combinedArr.length > 0) {
        let min = findMinAndRemoveSorted(combinedArr)
        sortedArr.push(min)
    }
    return sortedArr
}


//mergeSort should sort an unsorted array
function mergeSort(arr) {
    let midPoint = arr.length / 2
    let firstHalf = arr.slice(0, midPoint)
    let secondHalf = arr.slice(midPoint, arr.length)

    if (arr.length < 2) { return arr }
    else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
