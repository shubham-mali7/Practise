// let i = 0
// for(i=0; i<=5; i++){
// console.log(i);
// }

// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let numbers = [1,2,3,4,5,6]

// for(number of numbers){
//    console.log(numbers[1]);
// }
 
// Function Declaration 
// function add(a,b){
//     return a+b;
// } 

// let ans = add(1,2);
// console.log(ans);

//Function expression 

// const add = function(a,b){
//     return a+b;
// }

// const ans = add(1,2);
// console.log(ans);

// Direct method---------------
// let pname = "shubham mali";
// let reversedName= pname.split("").reverse().join("");
// console.log(reversedName);

let pname = "shubham mali";
let emptyArray = [];
let reverseEmpty = [];
let len = pname.length;
console.log(len);
let formArray = ()=>{

    for(i=0; i<=len-1; i++){
        // console.log(i);
        emptyArray.push(pname[i])
    }
    return emptyArray;
}

let reverseArray = () =>{
    for( let i = pname.length-1; i>=0 ;i--){
        reverseEmpty.push(pname[i]);
    }
    return reverseEmpty;
}
const result1 = formArray();
const result2 = reverseArray();
console.log(result1);
console.log(result2.join(""));   // .join("")

