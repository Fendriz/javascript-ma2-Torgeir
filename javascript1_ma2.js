//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function run(){
	function Paladin (hp, strenght, mana){
		this.hp=hp;
		this.strenght=strenght;
		this.mana= mana;
	}
	function Mage(hp, strenght, mana){
		this.hp=hp;
		this.strenght=strenght;
		this.mana=mana;
	}
	//Creating a method "checkstats" in the protype Object for Paladin.
	Paladin.prototype.checkStats = function() {
		console.log("You have " + this.hp + " HP");
		console.log("You have " + this.strenght + " Strenght");
		console.log("You have " + this.mana + " Mana");
	}
	//Creating a method "berserk" in the protype Object for Paladin.
	Paladin.prototype.berserk = function(){
		this.hp=this.hp*2;
		this.strenght=this.strenght*2;
		console.log("Using Berserk Spell....");

	}
	//Creating a method "drinkmana" in the protype Object for Paladin.
	Paladin.prototype.drinkmana = function(numberofPositions){
		this.mana = this.mana + (numberofPositions * 100);
		console.log("Drinking " + numberofPositions +" Posions of mana");
	}

	//CReating a empty object that inherits the methods from Paladin.
	Mage.prototype = Object.create(Paladin.prototype);


	//Creating a Mage and a Paladin object.
	var Nala= new Mage(70,100,200);
	var Erik= new Paladin(250,200,20);

	console.dir(Nala);
	console.dir(Erik);

	//Since I now have inherited the methods from Paladin I can use them on the Mage object "Nala"
	Nala.checkStats();
	Nala.berserk();
	Nala.drinkmana(3);
	Nala.checkStats();
}
run();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var liste= new Array(10);

for (var i = 0; i < liste.length; i++) {

	liste[i]=(i+1);
}
//slice out 5 from the array
liste.splice(4,1);

console.log(liste);


//3. Delete the last number in the array that you created above.

liste.pop();

console.log(liste);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:

function tim(){
	var test = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
	var res = test.replace("strawberry", "banana");
	var res2= res.replace("strawberries", "bananas");
	var res3= res2.replace("Strawberries", "Bananas");
	console.log(res3);
}

tim();


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var list = ["Leeds", "Fulham", "Arsenal", "liverpool"];

console.log("List before click: "+ list);
function listChanger() {

	list.length = 0; // set length to 0 remove all elements
	list = ["Honda","BMW","Audi","Toyota"];  //insert new elements
	console.log("List after new insert: " + list);

}


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var person1 = {
	name: "Torgeir",
	age: 32,
	hobbie: "Tableennis"
}
var person2 = {
	name: "Tim",
	age: 22,
	hobbie: "Football"
}
var person3 = {
	name: "Lis",
	age: 55,
	hobbie: "Handball"
}

var personArray= [person1, person2, person3];

var mapOutLis = personArray.filter(function (person) {
  return person.name === "Lis";
});
console.log(mapOutLis);

//7. Create a simple function that logs the date.

var datelogger = function(){

	var date = new Date();

	console.log(date);
}();