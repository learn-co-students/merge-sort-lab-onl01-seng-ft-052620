
function findMinAndRemoveSorted(array){
    let current_min = array[0]
    let current_min_index = 0
    
    array.forEach((element, index) => {
        if(element < current_min){
            current_min = element;
            current_min_index = index
        } 
    })
    array.splice(current_min_index, 1)
    return current_min
}

function findMinAndRemoveForTwo(firstHalf, secondHalf){
    let minfirstHalf = firstHalf[0]
    let minsecondHalf = secondHalf[0]
   
    if(minfirstHalf < minsecondHalf){
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
  }

function merge(firstHalf, secondHalf){
    let sorted = []
    let currentMin;
    while(firstHalf.length != 0 && secondHalf.length != 0){
      let currentMin = findMinAndRemoveForTwo(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
  }


  function mergeSort(array){
      let sorted = []
      while(array.length > 0 ){
        let min = findMinAndRemoveSorted(array)
        sorted.push(min)
      }
      return sorted
  }

