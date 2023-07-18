const data = require('./event-data');

//You are helping geologists build a dashboard of events in the last hour (data provided is for 1 hour)
//You can assume you will be asked these questions in the future for a different days worth of data.

// 1. How many earthquakes happened?
    const howManyEarthquakes = (str) => {
        let 
    }

// 2. How many tsunamis happened?
    const howManyTsunamis = (str) => {

    }

// 3. How many total events in California?
    const totalEventsCalifornia = (str) => {

    }

// 4. How many total events located outside California?
    const totalEventsOutside = (str) => {

    }

// 5. How many had a magnitude over 1.0?
    const magOverOne = (str) => {

    }

// 6. How many forest fires happened?
    const howManyFires = (str) = {

    }

// 7. How many total events?
    const totalEvents = (str) => {

    }

// 8. List all events (title) that have a magnitude over 0.5
    const magOverPointFive = (str) => {

    }

// 9. How many forest fires in California?
    const firesCalifornia = (str) => {

    }

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
