console.log("hello all");
let arr=[];
let num = prompt("enter number");
for(let i=0;i<num;i++){
    arr.push(i);
}
let oddcubes = arr.filter(ele=>ele%2!=0).map(ele=>ele**3);
console.log(oddcubes);
