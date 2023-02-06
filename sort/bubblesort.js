function bubbleSort(arr) {
let j,
n = 5

      for (let i = 0; i < n-1; i++) {
        min = i;                                       
        for(j=i+1;j<n;j++){

          if(arr[j]< arr[min]){
            min = j
            
          }
         
          
        }
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i]  = temp

          
        }
      }
    function  printarray(arr){
      size = 5
      var i ;
      for (i=0;i<size;i++){
        console.log(arr[i]);
      }
    }
  const arr = [8, 20, -2, 4, -6]
  bubbleSort(arr)
  printarray(arr);