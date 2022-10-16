function bubbleSort (x) {

    for(let tope = x.length - 1; tope > 0; tope--) {
   
    for(let i = 0; i < tope; i++) {
   
    if(x[i] > x[i+1]) {
   
    let aux = x[i];
   
    x[i] = x[1+i];
   
    x[i+1] = aux;
   
           }
   
       }
   
   }
   
   return x
   
   }
   function BusquedaBinaria(x,y){
       bubbleSort(x)
       let a = 0;
       let b = x.length-1;
       while(a<=b){
    let c = Math.round(a+b)/2;
    if(x[c]<y){
    a= c+1;
           }
    else if(x[c]>y){
    b= c-1;
     }
     else{
   return true
    }  }
   return false
    }
   
   let num = 34
   let arr = [34, 56, 3 ,76, 98,12,34,];
   console.log( BusquedaBinaria(arr, num))