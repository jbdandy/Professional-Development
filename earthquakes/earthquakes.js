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

//6. How many forest fires happened?
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



// 7. How many total events?
const totalEvents = (allEvents) => {
    return allEvents.length

}

console.log(totalEvents(events));

// 8. List all events (title) that have a magnitude over 0.5 - print out the title if magnitude is over 0.5
const magOverPointFive = (allEvents) => {
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        if (currentEvent.properties.mag > 0.5) {
            //console log the title of the currentEvent
            console.log(currentEvent.properties.title);
        }
    }

}
console.log(magOverPointFive(events));






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
const magAscend = (allEvents) => {
    //<what list are we sorting the variable name>.sort((eventA,eventB)=> <what to sort by>)
    //sort all events - sorts in place
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    allEvents.sort((eventA, eventB) => {
        if (eventA.properties.mag < eventB.properties.mag) {    //see problem 11 for modified version (clean)
            return -1;
        }
        if (eventA.properties.mag > eventB.properties.mag) {
            return 1;
        }

        return 0;
    })
    //traverse of sorted events
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        //title: magnitude
        console.log(currentEvent.properties.title + ": " + currentEvent.properties.mag);

    }
}

console.log(magAscend(events));


// 11. Sort the events in descending order by magnitude
const magDescend = (allEvents) => {             //find magnitude in event data
    //sort from highest to lowest
    allEvents.sort((eventA, eventB) =>
        eventB.properties.mag - eventA.properties.mag
    )
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        console.log(currentEvent.properties.title + ": " + currentEvent.properties.mag);
    }

}

console.log(magDescend(events));


// 12. Sort the events in descending order by time it occurred; notes: 1689635583687 is the number of milliseconds since January 1, 1970 (known as unix epoch time)
const descendTime = (allEvents) => {
    allEvents.sort((eventA, eventB) =>
        eventB.properties.time - eventA.properties.time
    )
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];
        console.log(currentEvent.properties.title + ": " + currentEvent.properties.time);
    }

}
console.log(descendTime(events));


// 13. Find the most recent earthquake with magnitude over 0.5 - print the name of that earthquake (print 1 name and magnitude)
const mostRecent = (allEvents) => {
    //allEvents is already sorted desc because of the above code so no need to sort it again here
    for (let i = 0; i < allEvents.length; i++) {
        const currentEvent = allEvents[i];

        if (currentEvent.properties.type === "earthquake" && currentEvent.properties.mag > 0.5){   //find === earthquake and > 0.5
            console.log(currentEvent.properties.title)
            break;
        }
    }
}

console.log(mostRecent(events));






//Accessing properties on an object
//data - is the events summary object
//data.features - gives you a array of events (nest property called features)
//data.features[0].properties.time - gives you the time the first event occured; first is because of index 0


