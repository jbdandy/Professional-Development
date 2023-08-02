//Venmo - dollars

class Person {
    firstName = '';
    lastName = '';
    email = '';
    phone = '';
    usdBalance = 0

    constructor(firstName, lastName, email, phone, usdBalance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.usdBalance = usdBalance;
    }
}

class Transaction {
    toPersonName;
    fromPersonName;
    amount;
    memo;
    date;
    constructor(toPersonName, fromPersonName, amount, memo, date) {
        //map the default values, see other constructors
        this.toPersonName = toPersonName;
        this.fromPersonName = fromPersonName;
        this.amount = amount;
        this.memo = memo;
        this.date = date;
    }
}

class Bank {
    transactions = [];

    //infinite money from somewhere to deposit into bank account
    depositUsd(amount, person) {
        //TODO: update person's usd balance with the new balance based on the amount deposited
        if (amount >= 0) {
            person.usdBalance = person.usdBalance + amount;

            //add transaction to the bank instance
            const randomIncomeEmployer = new Person('random', 'income-source', 'random@test.com', '', 1000000000);
            const newTransaction = new Transaction(randomIncomeEmployer.firstName, person.firstName, amount, 'deposit from random income source', new Date())
            this.transactions.push(newTransaction);
        }
    }


    sendUsd(amount, fromPerson, toPerson, memo) {
        //TODO
        //does the person sending tokens have enough tokens to send
        if (amount <= fromPerson.usdBalance) {
            //if they do update from person token balance and to person token balance
            toPerson.usdBalance = toPerson.usdBalance + amount;
            fromPerson.usdBalance = fromPerson.usdBalance - amount;

            //TODO: create a transaction and store it in the banks transactions array

            const newTransaction = new Transaction(toPerson.firstName, fromPerson.firstName, 200, "sending you money", new Date("08/01/2013"))
            this.transactions.push(newTransaction);


        } else { //console log 'insufficent token balance'
            console.log("Insufficient Token Balance")
        }

    }

}


const main = () => {


    const janeSmith = new Person('Jane', 'Smith', 'jsmith@pretendmail.com', 5555555555, 100)
    const jonDoe = new Person('Jon', 'Doe', 'jd@pretendemail.com', 7777777777, 10)
    console.log(janeSmith.usdBalance);

    const associatedBank = new Bank();
    const usBank = new Bank();

    //Jane 
    associatedBank.depositUsd(3, janeSmith);
    usBank.depositUsd(2, janeSmith);
    //Joe
    associatedBank.depositUsd(4, jonDoe);

    //Jane sends Jon 5
    associatedBank.sendUsd(5, janeSmith, jonDoe, 'lost bet');

    //Jane sends Jon 1 
    associatedBank.sendUsd(1, janeSmith, jonDoe, 'burger');

    console.log(associatedBank.transactions);

    console.log(`Expect Janes associatedBank and usBank balance to be: 99, actual:${janeSmith.usdBalance} and Jons to be: 20 actual: ${jonDoe.usdBalance}`);
    console.log(`Expect associatedBank to have 4 number of transactions, actual:${associatedBank.transactions.length}`);
    console.log(`Expect usBank to have 1 number of transactions, actual:${usBank.transactions.length}`);
    console.log(`Expect usBank to have correct number of transactions: ${usBank.transactions.length === 1 ? 'PASS':'FAIL'}`);
    //testing frameworks like jest that use code that looks like this
    // expect(usBank.transactions.length).toEqual(1);
}
main();