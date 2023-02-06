function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    let pivot = arr[0];
    let left = [];
    let right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    console.log(left);
    console.log(right);
    return quickSort(left).concat(pivot, quickSort(right));
  }
  

  let arr= [32,1,43,11,9]

  console.log(quickSort(arr));