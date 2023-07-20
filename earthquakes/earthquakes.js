const data = require('./event-data');
const events = data.features;//the array of events

//You are helping geologists build a dashboard of events in the last hour (data provided is for 1 hour)
//You can assume you will be asked these questions in the future for a different days worth of data.

// 1. How many earthquakes happened?
//allEvents - is an array that contains events from event-data.js
const howManyEarthquakes = (allEvents) => {
    let count = 0;
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i]; //get single element from an array 
        if (currentEvent.properties.type === "earthquake") { //add . to go to next property and then . again until you get to the field name you are looking for (field name is synonomous with property)
            count = count + 1;
        }
    }
    return count;

}
//search for earthquake
//eartquack in "type" under properties
console.log(howManyEarthquakes(events));

// 2. How many tsunamis happened?
const howManyTsunamis = (allEvents) => {
    let count = 0;
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        if (currentEvent.properties.tsunami === 1) {
            count = count + 1;
        }
    }
    return count;

}

console.log(howManyTsunamis(events));

// 3. How many total events in California?
const totalEventsCalifornia = (allEvents) => {
    let count = 0;
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];

        //parse place value for the state
        const state = currentEvent.properties.place.substr(-2, 2);
        if (state === "CA") {
            count = count + 1;
        }
    }
    return count;
}

console.log(totalEventsCalifornia(events));


// 4. How many total events located outside California?
const totalEventsOutside = (allEvents) => {
    //solution 1: copy and paste solution to number 3 and change to !== 'CA'
    //solution 2: use function totalEventsCalifornia and the total number of events to calculate the number not in CA
    return allEvents.length - totalEventsCalifornia(allEvents);
}
console.log(totalEventsOutside(events));


//*** */ 5. How many had a magnitude over 1.0?
const magOverOne = (allEvents) => {
    let count = 0;
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        if (currentEvent.properties.mag > 1) {
            count = count + 1;
        }
    }
    return count;

}
console.log(magOverOne(events));

//*** */ 6. How many forest fires happened?
const howManyFires = (allEvents) => {
    let count = 0;
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        if (currentEvent.properties.type === 'forest-fire') {
            count = count + 1;
        }
    }
    return count;

}

console.log(howManyFires(events));



//*** */ 7. How many total events?
const totalEvents = (allEvents) => {
    return allEvents.length

}

console.log(totalEvents(events));

// 8. List all events (title) that have a magnitude over 0.5 - print out the title if magnitude is over 0.5
const magOverPointFive = (allEvents) => {
    let title = ' ';
    for ( let i = 0; i < allEvents.lenth; i++) {
        const currentEvent = allEvents[i];
        if (currentEvent.properties.mag > 0.5) {
            readAsText ("title");
        }
    }
return (title);

}
console.log(magOverPointFive(events));

//STUCK ON NUMBER 8


// 9. How many forest fires in California?
const firesCalifornia = (allEvents) => {
    let count = 0;
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];

        //parse place value for the state
        const state = currentEvent.properties.place.substr(-2, 2);
        if (state === "CA" && currentEvent.properties.type === "forest-fire") {
            count = count + 1;
        }
    }
    return count;
}

console.log(firesCalifornia(events));



// 10. Sort the events in ascending order by magnitude
const magAscend = (allEvents) => {              //find magnitude in event data
    
        const currentEvent = allEvents[i];
        magAscend.sort((a, b) => a - b)         //sort from lowest to highest
        }                                   







// 11. Sort the events in descending order by magnitude
const magDescend = (allEvents) => {             //find magnitude in event data
    magDescend.sort((a, b) => b - a)            //sort from highest to lowest
}


// 12. Sort the events in descending order by time it occurred; notes: 1689635583687 is the number of milliseconds since January 1, 1970 (known as unix epoch time)
const descendTime = (allEvents) => {    //find time in event data
                                        //sort from highest to lowest
}


// 13. Find the most recent earthquake with magnitude over 0.5
const mostRecent = (allEvents) => {     //find magnitudes over 0.5
                                        //find most recent time
}







//Accessing properties on an object
//data - is the events summary object
//data.features - gives you a array of events (nest property called features)
//data.features[0].properties.time - gives you the time the first event occured; first is because of index 0



