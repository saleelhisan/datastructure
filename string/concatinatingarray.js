

let a=[1,2,3]
let b=[4,5,6] 

a1=a.length;
b1= b.length


for(i=a.length,j=0;i<a1+b1;i++,j++){
    a[i] = b[j]
}


for(i=0;i<a1+b1;i++){
    console.log(a[i]);
}
