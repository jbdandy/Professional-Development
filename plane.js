//Write a program to create a class called Plane with seats, status reflecting if all passengers have been served
//Seat contains properties status (whether or not was served), order information (what drink and food), name (ex: 14A)
//Program should take all seats orders and then delivery food/drink to each seat, print out "Complete" when the whole plane 
//has been served. print out each seats order once it was served "Delivered: <food> <drink> to <seat name>"


//creat class called plane with seats
class planeWithSeats {
    served = 1;
    notServed = 2;
    drinkFood = ''
    seatNumber = '';



    constructor(served, orderInfo, seatNumber) {
        this.served = served;
        this.notServed = notServed;
        this.drinkFood = drinkFood;
        this.seatNumber = seatNumber;
    }
}

class takeOrder {
    food = '';
    drink = '';

    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

//take all seat orders
class seatOrders {

    orders = [];

    takeOrder (food, drink, seatNumber) {
        if (drink = 1) {

        }
    }
}

//deliver all seat orders

//print "Complete" when entire plan has been served