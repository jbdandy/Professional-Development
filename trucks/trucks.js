const data = require('./truck-data');
const trips = data.truckLoads;



//1. How many total trips?
const howManyTrips = (allData) => {

    //short version
    return (allData.length);

    /*
    //long version
    // let count = 0;
    // for (let i = 0; i < allData.length; i++) {
    //     const currentData = allData[i];
    //     if (currentData.distance > 0) {
    //     count = count + 1;
    //     }
        
    // }
    // return count;
    */
} 

console.log(howManyTrips(trips));




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

console.log(originPdx(trips));



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

console.log(destinationSlc(trips));



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

console.log(toFrom(trips));




const deliverRoute = [
    {
        date: "2001/02/14 15:12",
        delay: 8,
        distance: 342,
        origin: "SJC",
        destination: "SNA",
      },
      {
        date: "2001/01/22 09:50",
        delay: -10,
        distance: 601,
        origin: "SNA",
        destination: "RNO",
      },
      {
        date: "2001/01/17 10:59",
        delay: 4,
        distance: 181,
        origin: "RNO",
        destination: "OKC",
      },
]

//#5 
//A.) Find total distance traveled for delivery route?
    //add distance from each delivery
    const totalDistance = (stops) => {
        let totalDelay = 0;
        for (let i = 0; i < stops.length; i++) {
            const currentStop = stops[i];
            /* {
                date: "2001/01/17 10:59",
                delay: 4,
                distance: 181,
                origin: "RNO",
                destination: "OKC",
              }
              */

              
            //when each destination is reached, 
            totalDelay = totalDelay + currentStop.delay
            //add the disctance to the current number of miles traveled, 
            
            //starting with 0 - done line 107
        }

        return totalDelay;
    }
    console.log(totalDistance(deliverRoute));


//b.) Using last solution how would you modify the code to determine how long of a delay was the delivery?