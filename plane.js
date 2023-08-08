//Write a program to create a class called Plane with seats, status reflecting if all passengers have been served
//Seat contains properties status (whether or not was served), order information (what drink and food), name (ex: 14A)
//Program should take all seats orders and then delivery food/drink to each seat, print out "Complete" when the whole plane 
//has been served. print out each seats order once it was served "Delivered: <food> <drink> to <seat name>"


//creat class called plane with seats
class PlaneOrderingSystem {
    orders = [];//array of type Order


    //return true or false if all orders were served
    getServingStatus(){
        //TODO:calculate if all orders have been served
        
    }

    //returns number of orders left to serve
    howManyLeftToServe(){
        //TODO: have a list of N orders; How do you know if a single order was not served? How would you count this for all orders?
        return this.orders.length - howManyOrdersWereServed()
    }

    //returns number of orders served
    howManyOrdersWereServed(){
        //TODO: have a list of N orders; How do you know if a single order was served? How would you count this for all orders?
        const countOfOrdersServed = 0;    //served
        // const ordersWithoutXs = 0; //not served
        
        //go one by one to see if order has an X on it
        for (let i = 0; i < this.orders.length; i++){
            //if it does then put in X pile otherwise put in other pile
            const currentOrder = this.orders[i];//{food:'banana',drink:'coke',served:false,seatNumber:'1A'}
            if(currentOrder.served === true){
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
    serveOrders(){
        for (let i = 0; i < 4; i++){
            const serveOrders = this.orders[i];
            if(serveOrders)
        }
        //TODO:
    }

    //newOrder is an order object (instance of a class)
    addOrder(newOrder){
        //Adds a newOrder to the orders array; add item to an array. what is the item? what is the array?
        this.orders.push(newOrder); //push() will add item to existing array
    }
}

//Tracking orders not seats
class Order {
    food = '';
    drink = '';
    served=false;
    seatNumber='';//need so we know where to deliver it

    //calling constructor method looks like `new Order("banana","coke","11A")
    constructor(food, drink, seatNumber){ //constructor is a fancy keyword that creates a block in the computers memory to store data
        this.food = food; //sub-block, aka property; set it equal to what the caller told me to - 'banana'
        this.drink = drink;
        this.seatNumber = seatNumber;
    }

    //wasServed:boolean
    updateServedStatus(wasServed){
        this.served = wasServed;
    }
}



//deliver all seat orders

//print "Complete" when entire plan has been served


const main = ()=>{

    //initiate Plane

    //create a bunch of orders
    const order1 = new Order('banana','coke','1A');//creates order
    order1.updateServedStatus(true);//updates status

    //serve all orders

    //check status of plane

}

const ex1 = ()=>{
    const count = 0;
    count = count + 1;
}
console.log(ex1());//?

const ex2 = ()=>{
    return 100;
}
console.log(ex2());//?