//datastructures
//types: Trees, Arrays/Lists, Stacks, Queues, Set, Hashmaps, Hashtables 
// Queues use First In First Out (FIFO) analogy
// Set removes duplicates
//Hashtables & Hashmaps put things in form of buckets - used in blockchain
//Hashmaps - connects buckets using items in the bucket - are immutable

//algorithms
//eg: Binarysearch, Mergesort, Selectionsort, Bubblesort, Linearsort
//time and space complexity directs how to choose the algorithm
//BigO (big o notation) - helps you determine how much space you are taking
//Class focus - Mergesort and Binarysearch 
//Binarysearch uses divide and conquer analogy
//uses time complexity of 1 -   O(1)

//qstn: Given an array of numbers, search for the following target and return -1 if not found
//the index 

function binary  (arr, target){
    let leftIndex = 0;                         //start of array
    let rightIndex = arr.length -1;            //end of array
    console.log("left1", leftIndex);
    console.log("right1", rightIndex);

                                                //check if the array exists first and not search past the no. of array elements
                                                //if the while loop passes, it will continue looping around it
                                                //left should always be less than right, means the array doesn't go beyond its array elements
while(leftIndex <= rightIndex){
                                                //gets the middle index (use whole numbers as the middle (modulus))
    let middle = Math.floor((leftIndex + rightIndex)/2);
  console.log("left2", leftIndex);
  console.log("right2", rightIndex);
  console.log("middle",middle);

    if(arr[middle] === target){                 //checks if the middle is equal to the target
        return middle;
    }
                                                //if middle is more, target is on the left side, discard right side (move the start to middle)
                                                //the middle becomes our last ( minus 1 the index of the last = for the middle to be last)
    else if(arr[middle] > target){ 
        rightIndex = middle -1
    }else{
        leftIndex = middle +1
    }
}
    return -1;                                   //if it doesn't find the target on either side
}
  let num = [1,3,6,8,9,56,89];
  let target = 9;                                //Binarysearch works with sorted arrays
console.log(binary(num , target));               //target is at index 4

