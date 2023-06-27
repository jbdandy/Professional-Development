/*
Below are a list of exercises I want you to complete before next time. 
Running this file will print the expected results. Should see all PASS in console/terminal

To debug you can comment out various exercises. Skip around as some are easier than others.


*/


// arr - an array of numbers, ex: [1,2,3],
// val - a number
//returns a boolean
//const ex1 = (arr, val)=>{
    //TODO: write code that returns true if the value is found in the array, if it is not found return false

    const ex1 = [1,3,5,7,9,11]; // JD
    
    console.log(ex1.includes(3));   // JD
    console.log(ex1.includes(11));  // JD
    console.log(ex1.includes(14));  // JD
    console.log(ex1.includes(7));   // JD
//}

/*
console.log(ex1([1,2,3],6) === false ? 'PASS': 'FAIL');//should return false
console.log(ex1([1,2,3],2) === true ? 'PASS': 'FAIL');//should return true
console.log(ex1([1,2,3],1) === true ? 'PASS': 'FAIL');//should return true
console.log(ex1([1,2,3],3) === true ? 'PASS': 'FAIL');//should return true
console.log(ex1([13,233,4443,444444343],4443) === true ? 'PASS': 'FAIL');//should return true



// arr - an array of numbers, ex: [1,2,3],
// val - a number
//returns a boolean
*/

/*
const ex2 = (arr, val)=>{
    //TODO: write code that returns true if the value is found in the array, if it is not found return false
    //If in ex1 you used a loop, then in this answer use the method on the array to search for the value; 
    //If in ex1 you used the array method then use a loop here for you answer
}


console.log(ex2([1,2,3],6) === false ? 'PASS': 'FAIL');//should return false
console.log(ex2([1,2,3],2) === true ? 'PASS': 'FAIL');//should return true
console.log(ex2([1,2,3],1) === true ? 'PASS': 'FAIL');//should return true
console.log(ex2([1,2,3],3) === true ? 'PASS': 'FAIL');//should return true
console.log(ex2([13,233,4443,444444343],4443) === true ? 'PASS': 'FAIL');//should return true
*/

const ex2 = [1,2,3,4,5];
function arraycheck () {
    for
    if
    else
    }


//nums - an array of numbers

// create an array
const ex3 = [5, 10, 15, 20, 25];
    let result = 0; //create variable for sum and initialize

    for (let i = 0; i < ex3.length; i++) {
        result += ex3[i];
    }       //for loop
    //TODO: write code to add up all numbers in array and return the result
    console.log(result)



/* console.log(ex3([1,2,3]) === 6 ? 'PASS': 'FAIL');
console.log(ex3([1,2]) === 3 ? 'PASS': 'FAIL');
console.log(ex3([20,2]) === 22 ? 'PASS': 'FAIL');
console.log(ex3([]) === 0 ? 'PASS': 'FAIL');
console.log(ex3([-1,1]) === 0 ? 'PASS': 'FAIL'); */

//should return a string



const ex4 = (8);{

if (ex4 % 2 == 0)
{
    alert('cat');
}
else if (ex4 % 3 == 0)
{
    alert('dog');
}
else (ex4 % 2 == 0 && ex4 % 3 == 0)
{
    alert('catdog');
}

}
console.log(alert)


/*    // Given a number, num do the following
    //If the number is divisible by 2 return "cat"
    //If the number is divisible by 3 return "dog"
    //If the number is divisible by 2 and 3 return "catdog"
    //ex: input:9, output: "dog"
    //ex: input:4, output: "cat"
    //ex: input:12, output: "catdog"
    */

/*
console.log(ex4(9) === 'dog' ? 'PASS': 'FAIL');
console.log(ex4(4) === 'cat' ? 'PASS': 'FAIL');
console.log(ex4(12) === 'catdog' ? 'PASS': 'FAIL');


/*
//nums - an array of numbers

const ex5 = (nums)=>{
    //Using your solution in ex4 without re-writing it, process the list of numbers, nums, by
    //return an array of the answers "cat","dog","catdog" using the sames rules - see test cases for example
    //hint: will need a loop here
    let result = [];

    //TODO: write the code here */

    

  /*  return result;
}
console.log(ex5([9,4,12]) === ['dog','cat','catdog'] ? 'PASS': 'FAIL');
*/