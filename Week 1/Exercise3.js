
function challenge3(arr){
    let sum=0;
    if(arr.length === 0) return 0; 
    for(let i = 0; i <arr.length; i++) {
        sum += arr[i];
    }
    let result = sum / arr.length;
    return result;
}
let arr1=[85,90,78,92];
console.log(challenge3(arr1));
let arr2=[10,20,30];
console.log(challenge3(arr2));
let arr3=[];
console.log(challenge3(arr3));