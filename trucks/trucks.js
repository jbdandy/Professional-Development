const data = require('./truck-data');
const trip = data.truckloads;



//1. How many total trips?
const howManyTrips = (allData) => {
    let count = 0;
    for (let i = 0; i < allData.length; i++) {
    const currentData = allData[i];
    count = count + 1;

    return data.length
    }
}

console.log(howManyTrips(data));







//2. How many trips originated in PDX
const originPdx = (allData) => {
    let count = 0;
    for (let i = 0; i < allData.length; i++) {
        const currentData = allData[i];
        if (currentData.truckloads.origin === "PDX") {
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
        if (currentData.truckloads.destination === "SLC" && currentData.truckloads.distance > 300) {
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
        if (currentData.truckloads.origin === "PHX" && currentData.truckloads.destination === "MDW") {
            count = count + 1;
        }
    }
    return count;
}

console.log(toFrom(trip));