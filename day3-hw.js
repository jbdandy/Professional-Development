const findMinimum = (listOfNumbers) => {
    //if no numbers in list return -1;

    if (listOfNumbers.length === 0) {
        return -1;
    }
    //otherwise return the smallest number
    let min = Number.MAX_SAFE_INTEGER; //max allowed number is js //There is also a Number.MIN_SAFE_INTEGER

    for (let i = 0; i < listOfNumbers.length; i++) { //check each number in list,  //is current number less than the minimum
        const currentOne = listOfNumbers[i];
        if (currentOne < min) {
            min = currentOne;    //yes: update minimum,    //no: do nothing}
        }
    }
    return min;
}

const result = findMinimum([41, 8, 21, 34]);

// console.log(result);


/*
example 1:
input: []
output: -1

example 2:
input: [3]
output: 3

example 3:
input: [4,1,7,2]
output: 1
*/


//Paste your solution into here to test it: https://leetcode.com/problems/two-sum/
//Given a list are there 2 numbers that add to x; if there is two numbers that add to x return true, otherwise false
const twoSum = (listOfNumbers, x) => {


    // for (let i = 0; i < listOfNumbers.length - 1; i++) {
    //     for (let j = 1; j < listOfNumbers.length; j++) {
    //         if (listOfNumbers[i] + listOfNumbers[j] === x)
    //         result.push(i);
    //         result.push(j);
    //         // console.log(result);
    //     }
    // }

    for (let i = 0; i < listOfNumbers.length - 1; i++) {
        for (let j = i + 1; j < listOfNumbers.length; j++) {
            if ((listOfNumbers[i] + listOfNumbers[j]) === x)
                return true;

        }
    }
    return false;


    //leetcode solution
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const temp = nums[i] + nums[j];
            if (temp === target) {
                return [i, j];
            }
        }
    }



    //check every combination of numbers to see if the add up to x
    //hint: need two loops, start one at the first element and the other at the second element in list

    //loop 1 - start at first element in list
    // const currentValueA = "?";//first item in list


    //loop 2 - start at second in list
    // const currentValueB = "?";//second item in list

    //if current value A plus current value B equal x return true otherwise keep going


}






//returns the number of words in the sentence
//input: "happy birthday jane" - think of it as an array ['h','a','p','p','y', ' ', ...]
//output: 3

//input: "" - hint length of array is 0
//output: 0

//input: "jane"
//output: 1
const countNumberOfWords = (sentence) => {
    //how do you determine where one word starts and the other ends? with a space " "
    //hint: you will have to check every character in the sentence


    if (sentence.length === 0) {
        return 0;
    }

    let count = 1;         // current value set to 1                          // create a variable to keep count
    for (let i = 0; i < sentence.length; i++) { //start at index 0, if i is less than the length of sentence which is 0

        const currentValue = sentence.substr(i, 1);
        if (currentValue === " ") {
            //currentValue is a space - counting spaces
            count = count + 1;
        }

    }
    return count;

}


////////////////////////////////////////////////////////////
//example: "happy birthday jane!"
/*
    To exit a loop early use the keyword: break;
    To skip to the next iteration of a loop use the keyword: continue;
*/
const lengthOfFirstWord = (sentence) => {
    //write bonus code here

    if (sentence.length === 0) {
        return 0;
    }

    let count = 0;         //0, 1, 2, 3, 4, 5, 6                         // create a variable to keep count of characters
    for (let i = 0; i < sentence.length; i++) { //i=5  //start at index 0, if i is less than the length of sentence which is 0, 0 < 20
        const currentChar = sentence.substr(i, 1);//h,a,p,p,y," ", - same as sentence[i]
        if (currentChar === " ") {// " " === " " yes/no? yes
            //stop traversing the string - don't update count
            break;
        }
        count = count + 1;//0+1=1, 1+1, 3+1=4, 4+1 = 5, 5+1=6
    }
    return count;//<---6
}


//"a". length of 1, index 0 is a
//example: "happy birthday jane"
const lengthOfLastWord = (sentence) => {
    //write bonus code here

    if (sentence.length === 0) {
        return 0;
    }

    let count = 0;
    //sentence= "abc", length=3, sentence[3 - 1]=sentence[2]=c=sentence[sentence.length-1 -1]
    //           012
    for (let i = sentence.length - 1; i >= 0; i--) {//<------(start, when stop, what to visit next (next index, previous index, every other, etc))
        const currentChar = sentence.substr(i, 1);
        if (currentChar === " ") {
            //stop traversing the string - don't update count
            break;
        }
        count = count + 1;
    }
    return count;
}

// console.log(count);

//console.log print length of every word

const text = "i am trying to figure this out"

const lengthOfEveryWord = (str) => {
    let count = [];
    let word = str.split(" ");              //use split, slice uses indexes to specify
    for (let i = 0; i < word.length; i++) {
        count.push(word[i].length);          //adds new items to end of an array
    }
    return count;
}

// console.log(lengthOfEveryWord('i am trying to figure this out'));


//stops: 'g' - gas station, 'r' - resturant 
//ex: 'gggrgr' result is 6 total stops
//assume only g and r in stop string
// 'gg@r'
const countAllStops = (stops) => {
    let totalStops = 0;//the tally
    for (let i = 0; i < stops.length; i++) {
        //loop visits one character at a time
        const currentChar = stops.substr(i, 1);
        //make a tally
        // || or, && and
        if (currentChar === "g" || currentChar === "r") {
            totalStops = totalStops + 1;
        }
    }
    return totalStops;
}

const temp = (x) => {
    let count = 0;
    if (x === 'g') {
        count = count + 1;
        console.log('its a gas station');
    }
    return count;
}
// console.log(temp('g'));
//its a gas station
//1


const temp2 = (x) => {
    let count = 0;
    //this is equivalent to the below without curly braces
    // if(x === 'g'){
    //     count = count + 1;
    // }

    if (x === 'g')
        count = count + 1;
    console.log('its a gas station');
    return count;
}
// console.log(temp2('r'));
//its a gas station
//0


//ex: 'gggrgr' result is 4 gas stations
const countGasStations = (gas) => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        //TODO: how do we update the count so we get the correct number of gas stations
        const currentChar1 = gas.substr(i, 1);
        if (currentChar1 === "g") {
            count = count + 1;
        }
    }
    return count;
}
// console.log(countGasStations('gggrgr'));

//count all characters but not spaces, print the count for each word, reset count at space
//"me"
//"i like"
const lengthOfEveryWord2 = (sentence) => {
    if (sentence.length === 0) {
        return 0;
    }

    let count = 0;//4 //the count of characters in a single word

    for (let i = 0; i < sentence.length; i++) {//i=6
        const currentChar = sentence.substr(i, 1);//i, " ", l,i,k,e  //substr(where to start, how many characters to visit)
        if (currentChar === " ") {
            //its a space! What do we want to do?

            //print the current word length (aka count of characters)
            console.log(count);//prints 1,
            //reset count to 0
            count = 0;

        } else {
            //not a space then what?
            count = count + 1;
        }
    }
    if (count > 0){
        console.log(count);//4
    }

}

// console.log(lengthOfEveryWord2('i am trying to figure this out'));


/*
sentence: abc test
                  ^
          
count: 4

["abc","test"]

steps once you finish a word:
1. print out the count // 3
2. reset the count 0


//if count > 0 print out current count (aka last word in sentence)
*/




//hints: how would we reset count for each word?
//hints: when do we want to update the count?


// if (sentence.length === 0) {
//     return 0;
// }                                //use .slice to get last word, count word length
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//     if
// }
// return count;

//}

//Bonus: Return the length of the last word: Try and solve: https://leetcode.com/problems/length-of-last-word/
//hints:
//1 - use what you know from countNumberOfWords problem
//2 - keep track of length of each word
//3 - to track length use a new variable that is a counter, reset counter once you hit the next word,
//at end of the sentence your count will be the length of the last word
//Return the length of the last word

//Bonus 2: print out (console log) length of each word



///////////////////////////////

//Extra Credit: https://leetcode.com/problems/roman-to-integer/
//hints: use lots of if statements

const romanToInteger = () => {
    let array = ["I", "V", "X", "L", "C"];
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100
    }

    let sum = 0;

    // for (let i = )
}
