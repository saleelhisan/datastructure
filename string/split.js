let gfg = 'GFG '
let geeks = 'stands-for-GeeksforGeeks'
   
    // Split string on '-'. 
    console.log(geeks.split(''))

    let arr = geeks.split('')

    function fl (arr){
        arr.shift();
        arr.pop()
    }

    fl(arr)

    console.log(arr.join(''));
    console.log(geeks.slice(7,10))