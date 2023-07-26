//https://blockly.games/puzzle?lang=en

//3x3
/*
[
[8,9,10,11],
[4,5,6,7],
[0,1,2,3],
]

coordinates 0,0 has a value of 8
coordinates 0,3 has a value of 11
coordinates 1,0 has a value of 4

*/

//end of maze is 4 steps forward
//start: 0,0
//destination: 0,3 (row 0, col 3)
//maze:
/*
[
    [1,1,1,1],row=0
    [0,0,0,0],row=1
    [0,0,0,0],row=2
col= 0,1,2,3
]

coordinate: [2,3]

0 = not a path, water
1 = a path, land
assume there's 1 path from start to destination
*/

const solveEasyMaze = (maze) => {
    let currentPosition = [0, 0];
    const destinationPositon = [0, 3];

    while (checkIfAtDestination(currentPosition, destinationPositon)) {
        const newPosition = moveForward(currentPosition);
        currentPosition = newPosition;

        //simplified to
        //currentPosition = moveForward(currentPosition);
    }
    console.log(`You finished: row: ${currentPosition[0]}, col: ${currentPosition[1]}`);
}

//TODO: Update to pass correct variables to each function
const solveStairMaze = (maze) => {
    let currentPosition = [0, 0];
    let destination = [3,3];

    while (checkIfAtDestination(currentPosition)) {
        currentPosition = moveForward(currentPosition);
        currentPosition = turnLeft(currentPosition);
        currentPosition = moveForward(currentPosition);
        currentPosition = turnRight(currentPosition);
    }

}

//example: [x,y] or think [row, col]; row is at index 0 (first item in array), col is at index 1 (second item in an array)
//currentPosition = [4,5];
//destination = [6,30]; length of 2

const checkIfAtDestination = (currentPosition, destination) => {
    //How do we know if we are at destination?
    //return true or false;

    const currentPositionRow = currentPosition[0];//get first item in an array, the array name is currentPosition, what index is the first in an array?
    const currentPositionCol = currentPosition[1]; //get second item in an array, the array name is currentPosition
    const destinationRow = destinationPosition[0];
    const destinationCol = destinationPosition[1];

    //now compare them and return the correct answer;
    //TODO: write code here to compare if in same position
    if (currentPositionRow === destinationRow && currentPositionCol === destinationCol) {
        //both rows and cols are the same
        return true;
    } else {
        //not the same row
        return false;
    }
}

console.log();


//input: currentPosition = [?,?];
//output: returns a new position of: [?,?+1] - returns an array of [?,?]
const moveForward = (currentPosition) => {
    const newRow = currentPosition[0];
    const newColumn = currentPosition[1] + 1;//currentColumn + 1
    
    return [newRow, newColumn];

}

//currentPosition = [?,?];
//returns a new position of: [?-1,?] // row is changing
const turnLeft = (currentPosition) => {
    
    const newRow = currentPosition[0] - 1;
    const newColumn = currentPosition[1];
    

    return [newRow, newColumn];
    
}

//currentPosition = [4,5];
//returns a new position of: [5,5]
const turnRight = (currentPosition) => {

    const newRow = currentPosition[0] + 1;
    const newColumn = currentPosition[1];

    return [newRow, newColumn];
    

}


const moveBackward = (currentPosition)=>{
    const newRow = currentPosition[0];
    const newColumn = currentPosition[1] - 1;

    return [newRow, newColumn];


}

//complete 81-97 and 45