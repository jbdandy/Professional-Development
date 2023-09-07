//Write a program to create a class called Plane with seats, status reflecting if all passengers have been served
//Seat contains properties status (whether or not was served), order information (what drink and food), name (ex: 14A)
//Program should take all seats orders and then delivery food/drink to each seat, print out "Complete" when the whole plane 
//has been served. print out each seats order once it was served "Delivered: <food> <drink> to <seat name>"
const hasBeenServed = (order) => {
    //when do we want to return true - it is not served
    if (order.served === false) {
        return true;
    } else {
        //when do we want to return false - it has been served  
        return false;
    }
};

//creat class called plane with seats
class PlaneOrderingSystem {
    orders = [];//array of type Order

    constructor(){}
    
    //return true or false if all orders were served
    //if all are served - true
    //if at least 1 is not served - false
    //output: true or false (boolean)
    hasAllBeenServed() {
        //calculate if all orders have been served
        //this.orders = [
        //   {food:'banana',drink:'coke',served:true,seatNumber:'1A'},
        //   {food:'banana',drink:'coke',served:false,seatNumber:'1B'}
        //]

        /*solution 1
        let result = true;
        for (let i = 0; i < this.orders.length; i++){
            const currentOrder = this.orders[i];
            if(currentOrder.served === false){
                result = false;
                break;
            }
        }
        return result;
        */
        //filter method on array

        //solution 2 - must use filter
        // const ordersNotServed = this.orders.filter(hasBeenServed);
        //how would we check if the ordersNotServed array has elements in it? 
        //how many things in an array? ordersNotServed.length 7
        // const numberOfOrdersNotServed = ordersNotServed.length;
        // if(numberOfOrdersNotServed === 0){
        //     //no orders that have not been served - all have been served
        //     return true;
        // }else{
        //     //ex: 7 - 7 haven't been served
        //     return false;
        // }

        //solution 3 - must use howManyLeftToServe
    //     const numberOfOrdersNotServed = this.howManyLeftToServe();//ex:8 -> false, 0 -> true
    //     if (numberOfOrdersNotServed === 0) {
    //         return true;
    //     } else
    //         return false;
    // 
            //solution 4 - must use howManyOrdersWereServed
            const numberOfOrdersServed = this.howManyOrdersWereServed();
            if (numberOfOrdersServed === this.order.length){
                return true;
            }else
                return false;
    }
    //returns number of orders left to serve
    howManyLeftToServe() {
        //TODO: have a list of N orders; How do you know if a single order was not served? How would you count this for all orders?
        return this.orders.length - howManyOrdersWereServed()
    }

    //returns number of orders served
    howManyOrdersWereServed() {
        //TODO: have a list of N orders; How do you know if a single order was served? How would you count this for all orders?
        const countOfOrdersServed = 0;    //served
        // const ordersWithoutXs = 0; //not served

        //go one by one to see if order has an X on it
        for (let i = 0; i < this.orders.length; i++) {
            //if it does then put in X pile otherwise put in other pile
            const currentOrder = this.orders[i];//{food:'banana',drink:'coke',served:false,seatNumber:'1A'}
            if (currentOrder.served === true) {
                countOfOrdersServed = countOfOrdersServed + 1;
                //served
            }
            // else{
            //     ordersWithoutXs = ordersWithoutXs + 1;
            //     //not served

            // }

            //if the current order is served add it to the ordersWithXs array

            //else add it to the ordersWithoutXs

        }
        //TODO:

    }

    //can only serve at most 5 orders at a time
    serveOrders() {

        const ordersNotServed = this.orders.filter(hasBeenServed);//filter the list of orders for only those that have not been served

        const serveOrders = 5;
        //for (let i = 0; i < serveOrders; i++) {                 //determine if orders have been placed
        for (let i = 0; i < serveOrders && i < ordersNotServed.length; i++) {                 //determine if orders have been placed
            const currentOrder = ordersNotServed[i];               //if so, serve no more than 5 orders at a time
            // if(currentOrder === undefined){
            //     //ex: ordersNotServed = [1,3,4] ordersNotServed[6] === undefined
            //     break;                                          //will stop loop before going through 5 times
            // }
            if (currentOrder.served === false) {                //update status of order after serving
                currentOrder.updateServedStatus(true);
            }
        }

    }

    //newOrder is an order object (instance of a class)
    addOrder(newOrder) {
        //Adds a newOrder to the orders array; add item to an array. what is the item? what is the array?
        this.orders.push(newOrder); //push() will add item to existing array
    }
}

//Tracking orders not seats
class Order {
    food = '';
    drink = '';
    served = false;
    seatNumber = '';//need so we know where to deliver it

    //calling constructor method looks like `new Order("banana","coke","11A")
    constructor(food, drink, seatNumber) { //constructor is a fancy keyword that creates a block in the computers memory to store data
        this.food = food; //sub-block, aka property; set it equal to what the caller told me to - 'banana'
        this.drink = drink;
        this.seatNumber = seatNumber;
    }

    //wasServed:boolean
    updateServedStatus(wasServed) {
        this.served = wasServed;
    }
}



//deliver all seat orders

//print "Complete" when entire plan has been served


const main = () => {

    //initiate (aka construct) PlaneOrderingSystem instance (aka object)
    const plane = new PlaneOrderingSystem();

    //create a bunch of orders
    const order1 = new Order('banana', 'coke', '1A');//creates order
    
    //order1.updateServedStatus(true);//updates status

    //add order to plane ordering system
    plane.addOrder(order1);

    //TODO: create and add 12 more orders
    plane.addOrder( new Order('orange', 'sprite', '2A'))
    plane.addOrder( new Order('orange', 'sprite', '3B'))
    plane.addOrder( new Order('orange', 'sprite', '10A'))
    plane.addOrder( new Order('orange', 'sprite', '5B'))
    plane.addOrder( new Order('orange', 'sprite', '7C'))
    plane.addOrder( new Order('orange', 'sprite', '8D'))
    plane.addOrder( new Order('orange', 'sprite', '23A'))
    plane.addOrder( new Order('orange', 'sprite', '22A'))
    plane.addOrder( new Order('orange', 'sprite', '24A'))
    plane.addOrder( new Order('orange', 'sprite', '21A'))
    plane.addOrder( new Order('orange', 'sprite', '26A'))
    plane.addOrder( new Order('orange', 'sprite', '28A'))
    
    
    

    //TODO: print out the status of plane ordering system - how many left to serve, how many served





    //TODO: serve all orders, hint: you only can serve 5 at a time, use serveOrders function and the hasAllBeenServed function, need loop of some sort

    

}

const ex1 = () => {
    const count = 0;
    count = count + 1;
}
console.log(ex1());//?

const ex2 = () => {
    return 100;
}
console.log(ex2());//?