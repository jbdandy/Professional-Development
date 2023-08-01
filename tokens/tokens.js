//Venmo - dollars

class Person{
    firstName='';
    lastName='';
    email='';
    phone='';
    usdBalance=0

    constructor(firstName,lastName,email,phone,usdBalance){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.usdBalance = usdBalance;
    }
}

class Transactions{
    toPersonName;
    fromPersonName;
    amount;
    memo;
    date;
    constructor( toPersonName, fromPersonName, amount, memo, date){
            //TODO: map the default values, see other constructors
            this.toPersonName = toPersonName;
            this.fromPersonName = fromPersonName;
            this.amount = amount;
            this.memo = memo;
            this.date = date;
        }
}

class Bank{
    transactions = [];

    depositUsd(amount, person){
        //TODO
        //how many you want - amount
        //whos buying them - person
        if(amount <= firstName.lastName.usdBalance){
            usdBalance = usdBalance + amount;
        }else{
            console.log("Insufficient Funds")
        }
    }
        //Do they have enough money to buy it
        //if they have enough money give them the tokens and updated the usdBalance
        //if they don't have money - console log 'insufficient funds'



    
    //TODO: create new transaction
    
    //const newTransaction = new Transaction('jane','joe',4,'lost bet','12/15/23')
   //this.bank.transactions.push(newTransaction);
    

    const newTransaction = new Transaction(fromPerson, toPerson, amount, memo, date)
    bank.transactions.push('jane', 'joe', 4, 'lost bet', '12/15/23')
    
        



    sendUsd(amount, fromPerson, toPerson, memo){
        //TODO
        //does the person sending tokens have enough tokens to send
        if(amount <= fromPerson.usdBalance){
            //if they do update from person token balance and to person token balance
            toPerson.usdbalance == toPerson.usdBalance + amount && fromPerson.usdBalance == fromPerson.usdBalance - amount;

        }else{ //console log 'insufficent token balance'
            console.log("Insufficient Token Balance")
        }

    }

}


const main = ()=>{


    const janeSmith = new Person('Jane','Smith', 'jsmith@pretendmail.com', 5555555555,100)
    const jonDoe = new Person('Jon', 'Doe', 'jd@pretendemail.com', 7777777777,10)
    console.log(janeSmith.usdBalance);

    const bank = new Bank();

    //Jane wants to add 3 gold tokens
    bank.depositUsd(3, janeSmith);

    //Jane wants to add 2 silver tokens
    bank.depositUsd(2, janeSmith);
    //Joe wants to add 4 diamond tokens
    bank.depositUsd(4, jonDoe);

    //Jane sends Jon 5 gold tokens
    bank.sendUsd( 5, janeSmith, jonDoe, 'lost bet')

    //Jane sends Jon 1 gold token
    bank.sendUsd(1, janeSmith, jonDoe, 'burger')

    console.log(bank.transactions);
}
main();