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


// 5. How many had a magnitude over 1.0?
const magOverOne = (str) => {

}

// 6. How many forest fires happened?
const howManyFires = (str) => {

}

// 7. How many total events?
const totalEvents = (allEvents) => {
    return allEvents.length

}

console.log(totalEvents(events));

// 8. List all events (title) that have a magnitude over 0.5 - print out the title if magnitude is over 0.5
const magOverPointFive = (str) => {

}

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

/* create a function for each question 1-9
1. How many earthquakes happened?
2. How many tsunamis happened?
3. How many total events in California?
4. How many total events located outside California?
5. How many had a magnitude over 1.0?
6. How many forest fires happened?
7. How many total events?
8. List all events (title) that have a magnitude over 0.5
9. How many forest fires in California?
10. Sort the events in ascending order by magnitude
11. Sort the events in descending order by magnitude
12. Sort the events in descending order by time it occurred; notes: 1689635583687 is the number of milliseconds since January 1, 1970 (known as unix epoch time)
13. Find the most recent earthquake with magnitude over 0.5



*/
//Accessing properties on an object
//data - is the events summary object
//data.features - gives you a array of events (nest property called features)
//data.features[0].properties.time - gives you the time the first event occured; first is because of index 0


//1. How many earthquakes happened?
//Step 1: look at each event in the list
//Step 2a: check if event's property 'type' is 'earthquake'; count earthquakes;
//Step 2b: skip if not earthquake


//3. How many total events in California?
//Step 1: look at each event "place" to determine if equals to CA

//4.  How many total events located outside California?
//Set
