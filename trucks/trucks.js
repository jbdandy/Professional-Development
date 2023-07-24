const data = require('./truck-data');
const trip = data.truckLoads;



//1. How many total trips?
const howManyTrips = (allData) => {
    let count = 0;
    for (let i = 0; i < allData.length; i++) {
        const currentData = allData[i];
        if (currentData.distance > 0) {
        count = count + 1;
        }
        
    }
    return count;
}

console.log(howManyTrips(trip));




//2. How many trips originated in PDX
const originPdx = (allData) => {
    let count = 0;
    for (let i = 0; i < allData.length; i++) {
        const currentData = allData[i];
        if (currentData.origin === "PDX") {
            count = count + 1;
        }
    }
    return count;
}

console.log(originPdx(trip));



//3. How many trips had a destination of SLC and trip length over 300 miles.
const destinationSlc = (allData) => {
    let count = 0;
    for (let i = 0; i < allData.length; i++) {
        const currentData = allData[i];
        if (currentData.destination === "SLC" && currentData.distance > 300) {
            count = count + 1;
        }
    }
    return count;
}

console.log(destinationSlc(trip));



//4. How many trips went from PHX to MDW
const toFrom = (allData) => {
    let count = 0;
    for (let i = 0; i < allData.length; i++) {
        const currentData = allData[i];
        if (currentData.origin === "PHX" && currentData.destination === "MDW") {
            count = count + 1;
        }
    }
    return count;
}

console.log(toFrom(trip));