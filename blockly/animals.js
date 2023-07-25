
//https://blockly.games/puzzle?lang=en
const duck = {
    picture: 'https://somepictureofaduck.com',
    
    legs: 2,
    
    traits:
        [
            "Feathers",
            "Beak"
    ]

};


const cat = {
    picture: 'https://pictureofcat.com',

    legs: 4,

    traits:
    [
            "Fur",
            "Whiskers"
    ]
};

const animalName = {picture:'',legs:0,traits:["traitname"]}

const animalsList = [duck, cat];
    

console.log(cat.picture);

//Display the picture for each animal by printing out the url to console.
//TODO

//Print picture of the duck