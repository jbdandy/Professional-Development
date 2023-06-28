/*
Below are a list of exercises I want you to complete before next time. 
Running this file will print the expected results. Should see all PASS in console/terminal

To debug you can comment out various exercises. Skip around as some are easier than others.


*/


// arr - an array of numbers, ex: [1,2,3],
// val - a number
//returns a boolean (true or false)
// const ex1 = (arr, val)=>{
//     //TODO: write code that returns true if the value is found in the array, if it is not found return false


// }

// console.log(ex1([1,5,7,9,11],2) === false ? 'PASS': 'FAIL');      //entered code - JD


//console.log(ex1([1,2,3],6) === false ? 'PASS': 'FAIL');//should return false
//console.log(ex1([1,2,3],2) === true ? 'PASS': 'FAIL');//should return true
//console.log(ex1([1,2,3],1) === true ? 'PASS': 'FAIL');//should return true
//console.log(ex1([1,2,3],3) === true ? 'PASS': 'FAIL');//should return true
//console.log(ex1([13,233,4443,444444343],4443) === true ? 'PASS': 'FAIL');//should return true
//returns a boolean
const findMyCardInThisBagMachine = (bag, cardValue) => {
    //TODO: write code that returns true if the value is found in the array, if it is not found return false
    return bag.includes(cardValue);
}
// ex1(undefined, undefined);//first run same as ex1()

// findMyCardInThisBagMachine([1, 2, 3], 6)


// console.log(findMyCardInThisBagMachine([1,2,3],6) === false ? 'PASS': 'FAIL');//should return false
// console.log(findMyCardInThisBagMachine([1,2,3],2) === true ? 'PASS': 'FAIL');//should return true
// console.log(findMyCardInThisBagMachine([1,2,3],1) === true ? 'PASS': 'FAIL');//should return true
// console.log(findMyCardInThisBagMachine([1,2,3],3) === true ? 'PASS': 'FAIL');//should return true
// console.log(findMyCardInThisBagMachine([13,233,4443,444444343],4443) === true ? 'PASS': 'FAIL');//should return true

//input: quater
//output: gumball
function gumballMachine(coin) {

    //the turning of the dial
    let gumball = "";
    if (coin === 25) {
        gumball = "I'm a gumball!";
    } else {
        gumball = "please put 25 cents in" //display error
    }

    return gumball;
}

//human needs to interact with it
// console.log(gumballMachine(10));
/*





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
//cards=[4,13,2]
const findMyCardInThisBagMachine2 = (cards, cardImLookingFor) => {
    //do not use .includes() use a for loop
    const numberOfCards = cards.length;
    for (let i = 0; i < numberOfCards; i++) {
        //what do you want to do for each card you draw
        const currentCard = cards[i];
        if (cardImLookingFor === currentCard)
            return true
    }
    return false
};


// const ex2 = [1,2,3,4,5];
// function arraycheck () {
//     for
//     if
//     else
//     }


// nums - an array of numbers

// create an array
// const ex3 = [5, 10, 15, 20, 25];
//     let result = 0; //create variable for sum and initialize

//     for (let i = 0; i < ex3.length; i++) {
//         result += ex3[i];
//     }       //for loop
//     //TODO: write code to add up all numbers in array and return the result
//     console.log(result)



/* console.log(ex3([1,2,3]) === 6 ? 'PASS': 'FAIL');
console.log(ex3([1,2]) === 3 ? 'PASS': 'FAIL');
console.log(ex3([20,2]) === 22 ? 'PASS': 'FAIL');
console.log(ex3([]) === 0 ? 'PASS': 'FAIL');
console.log(ex3([-1,1]) === 0 ? 'PASS': 'FAIL'); */

//should return a string

//make function called isCatOrDog that returns "cat", "dog", "catdog" when given a number
//input: 4
//output: "cat"

const isCatOrDog = (input) => {
    // "0"==0 => true
    // "0"===0 => false - a string is not a number

    if (input % 2 == 0 && input % 3 != 0) {
        return "cat";
    }
    else if (input % 3 == 0 && input % 2 != 0) {
        return "dog";
    }
    else if (input % 2 == 0 && input % 3 == 0) {
        return "catdog";
    }
    return 'none of the above';
}
console.log(isCatOrDog(1));





const whatGender = (name) => {
    // "0"==0 => true
    // "0"===0 => false - a string is not a number

    if (name % 2 == 0 && name % 3 != 0) {
        return "male";
    }
    else if (name % 3 == 0 && name % 2 != 0) {
        return "female";
    }
    else if (name % 2 == 0 && name % 3 == 0) {
        return "malefemale";
    }
    return 'none of the above';
}


const processNames = (listOfNames) => {
    //Determine if each animal is a cat or dog or catdog or none of those - console log the result for each animal
    //step 1: console log each name in list

    const numberOfNames = listOfNames.length;//4
    for (let i = 0; i < numberOfNames; i++) {//0<4;1<4;2<4;;3<4;4=4
        const currentName = listOfNames[i];//listOfNames[0]=8;listOfNames[1]=43;listOfNames[2]=3;listOfNames[3]=2  //Give me the first item in the listOfNames and store the value (aka name) in the variable currentName
        console.log(currentName);//8;43;3;2 //prints the current name
        //print gender based on the currentName - hint: use funcion whatGender on line 155
        const gender = whatGender(currentName);//whatGender(8)=>"male";whatGender(43)=>"none";whatGender(3)=>"female;";whatGender(2)=>"male"    //this calls the <whatGender> function with input of <name> <currentName> and stores the result in variable gender
        console.log(gender);//"male";"none";"female";"male"  //using the gender we print it to the console

    }
}
processNames([8, 43, 3, 2]);//this calls the processNames function with input of a list of names [3,7,9,8]

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

//Terms/Cheatsheet
//function (aka method) = machine, or person that does set of action for you
//variables (sometimes called properties)= things that have values (storing results), inputs, outputs - think of as labels
//array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//object: arrays are objects, objects contain variables (more commonly referred to as properties) and functions
//for loop - do the same thing multiple times, searching
//arrayName[index] - give me an item in the array at a particular index, index starts at zero; example: arrayName[1] gives you second item in array
// i - the place in the list
// arrayName[i] - is the item at the place in the list

//code standards: naming convention (camelCase)



const addTwoNumbers = (number1, number2) => {
    //return the result - hint: will most likely be a single line of code
};

const addUpAllNumbersInTheList = (listOfNumbers) => {
    //return total - use the addTwoNumbers function - hint: you need to visit every number
};

//assume at least 2 numbers in list
console.log(addUpAllNumbersInTheList([4, 6]));//should print 10 when completed

//extra credit: what if theres zero numbers in list? what if only one number in list?


//git add *
//git commit -m "day 2 and 3 solutions"
//git push