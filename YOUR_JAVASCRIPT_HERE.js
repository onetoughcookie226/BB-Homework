// Write your JS here
// Creating the hero object
let hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}

// rest function takes an bject as an argument and reassign the health property of the object , value 10
// return the object from the function

function rest(hero) {
    // Set the value of the property health to 10
     hero.health = 10
    //  console.log(hero.health)
    return hero
}

var health = document.getElementById("inn");
health.addEventListener('click', function(event){
    console.log("test")
    // hero.health = 10
    rest(hero)
})

// document.getElementById('inn').addEventListener('click', function(event){ 
//     console.log('clicking the img') 
//     hero.health = 10
// })


// Picking up Items
// takes a hero-like object as the first argument and an object as the second argument
// Adds the weapon object as the last element of the inventory array of the hero-like object

// get the value of the 

function pickUpItem(newHero, ) {
    getAttribute.weapon (type, "dagger" )
}


function equipWeapon(newHero) {
    // Set the 
    // console.log(hero.inventory[0], hero.type: "dagger",  )
}
