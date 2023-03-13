//we can create using array literals or new array
 const items=[2,5,"sweet",false,45];
 //to get the last index in an array num.length -1 or num [-1]
 //when you want to get an array inside an array use num [4] [0] [2] say [2,3,5[6,7,8[5,6]]]
 // ?try this
//  const num=[2,3,5[6,7,8[5,6]]]
// Array methods
items.push(62);     //adds an item inside an array at the end
console.log("items-add-end",items);
items.unshift(6.5)     //adds an item inside an array at the start
console.log("items-add-start",items);
items.pop();     //remove items from the end of an array
console.log("items-remove-end",items);
items.shift();    //remove items at the start of an array
console.log("items-remove-start",items);

//Array sorting
let num=[1, 9, 34, 12, 25, 30];
let sorted=num.sort((a,b)=> a -b)                //sort in ascending order
console.log("sort-asc",sorted);
let sortit=num.sort((a,b)=> -a -b)                   //sort in descending order
console.log("sort-desc",sortit);
//.forEach does an activity in every object in an array
//.map goes through every element in an array
//.filter
//given an array of x elements, return an array with each element in x multiplied by 2
//for (let i=0, i=x.length,i++){
    //newArray.push(x[i]*2)
// }   takes longer to give output
//functions takes (parameters) as functions
const result= num.map(  //use map to make a function in every element in an array
    (x)=>{
return x * 2
    }
)
console.log("eachitem*2-map",result);

let newArray = []
const result2 = num.forEach((x,index)=>{newArray.push(x*2)})
console.log("eachitem*2-forEach",newArray);
console.log(result2);

//concantenation - joins two arrays together
let a = [1,2,3];
let b = [4,5,6];
let joined1 = a.concat(b);
console.log("joins-concat",joined1);

//spread operator ... (joins or distructures an array)
let c = [1,40, ...a, ...b];
console.log("joins-spread",{c});
//destructuring
let [z,x, ...e] = c;
console.log({z});
console.log({x});
console.log({e});

