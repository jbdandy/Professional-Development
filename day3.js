//input: listOfNumbers - type: array
const findMaximum = (listOfNumbers)=>{
    //if there are no numbers in list return -1 otherwise return the maximum value, you can assume no duplicates
    //How do you know how long the list is?
  
    
    //if no numbers in list return -1 
    if (listOfNumbers.length === 0) {
        return -1;
    }
    //otherwise return max value
    //need to check every number is list and determine which is highest/largest
  
    let max = 0;
    for (let i = 0; i < listOfNumbers.length;i++){
        //current one
        const currentOne = listOfNumbers[i];
        console.log (currentOne);
        //check if the current one is greater than the max
        if (currentOne > max){
        //yes: do what? update max to be the current one
         max = currentOne;  //update max with current value greater than "previous" max    Math.max(3,4)
        }
        //no: do what? move on to next number in list (do nothing)
    
        //other solution max = Math.max(currentOne,max); //same as lines 20-23
        
    }
    return max;

}







/*
example 1:
input: []
output: -1

example 2:
input: [3]
output: 3

example 3:
input: [4,1,7,2]
output: 7
*/