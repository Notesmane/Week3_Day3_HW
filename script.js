
//! Problem Source: https://perscholas.instructure.com/courses/1513/assignments/297948?module_item_id=965207


//^ Static Methods and Properties
// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have. //& Complete
// log the properties and test the methods (don't instantiate)

class Govenor {
    consructor(name, party, state) {
        this.name = 'Bart Simpson';
        this.party = 'Democrat';
        this.state = 'New York';
    }
}; console.log(Govenor);

console.log ('<=======================================================>');

//^ Inheritance
// Think of three properties all people share, set them with the constructor //& Complete
// Think of three methods all people share //& Complete
// Create a PostalWorker class that inherits from person, add some methods //& Complete
// Create a Chef class that inherits from person, add some methods //& Complete
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods //& Complete

class Person {
    constructor(name, race, gender) {
        this.name = name;
        this.race = race;
        this.gender = gender;
    } 
    getName(name) {
        return (`Hi, my name is, ${this.name}.`);
    }
    getRace(race) { 
        return (`H ${this.race}.`);
    }
    getGender(gender) {
        return this.gender;
    }
    speaks() {
        return (`${this.name} said,`);
    }
};

class PostalWorker extends Person {
    delivers() {
        return (`Relax, the mail was delivered, ${this.name} said.`);
    }
    chased() {
        return ('... got chased down the street by that crazy pitbull!');
    }
};

class Chef extends Person {
    eats() {
        return ('Through the mouth, between the teeth, thank you lord, let\'s eat!');
    }
    hardWroking() {
        return (`Because ${this.name} is ${this.race}, ${this.gender} feel ${this.gender} needs to be first one in and the last one out!`);
    } 
};

const petey = new PostalWorker('Petey', 'White', 'He');
const felisha = new PostalWorker('Felisha', 'African American', 'She');
const stanley = new Chef('Stanley', 'Black', 'He');
const damon = new Chef('Damon', 'Indian', 'They');

console.log(petey.getName());
console.log(petey.delivers());
console.log(felisha.getGender());
console.log(felisha.chased());
console.log(stanley.speaks());
console.log(stanley.eats());
console.log(damon.hardWroking());


// class Tyreek {
// }

// const tyreek = new Person('Tyreek', 'Asian', 220);
// const becky = new Person('Becky', 'African American', 115);

// tyreek.greet();
// tyreek.eat();
// becky.sleep();



// class PostalWorker {

// }