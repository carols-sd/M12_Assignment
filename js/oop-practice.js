// STEP 1
// Create two classes, one called Cat and another called Dog. 
// Both classes should be created using constructor syntax. 
// The Cat class should be created using a named declaration and 
// the Dog class should be created using an anonymous declaration.

// named class using ES5 object constructor syntax
function Cat() {
}

// anonymous class using ES5 object constructor syntax
const Dog = function() {
}


// STEP 2
// Create a new instance of the Cat class. 
// Directly underneath, create a new instance of the Dog class.

const cat1 = new Cat()
const dog1 = new Dog()


// STEP 3
// Create a new class using constructor syntax called Animal. 
// Create a method within the Animal class that when called, 
// displays the message “The Animal has been created” in the console window.

function Animal() {
    this.announce = function() {
        console.log("The Animal has been created!")
    }
}
const animal1 = new Animal()
animal1.announce()


// STEP 4
// Now, replicate the above code but this time so that the class accepts an argument and 
// that value is what is displayed in the console window. 
// The message should be passed into the constructor at the moment that the Animal class 
// is instantiated.

// function Animal(msg) {
//     let announcement = msg  // private 
//     this.announce = function() {
//         console.log(msg)
//     }
// }
// const animal2 = new Animal("The Animal has been created using a passed-in message argument")
// animal2.announce()


// STEP 5
// Start over and now create a new class using constructor syntax called Animal. 
// Define five properties within your class including properties type, breed, color, height, 
// and length. 
// These properties will be set within the object so you’ll need to pass in arguments into 
// the function’s constructor, set the properties, and then pass in the actual values during 
// the object’s instantiation.

// function Animal(type, breed, color, height, length) {
//     this._type = type  // public properties
//     this._breed = breed
//     this._color = color
//     this._height = height
//     this._length = length
// }


// STEP 6
// Use a for-in loop to loop through and display all of the properties in the Animal class. 
// You should see a total of 5 properties displayed in a list within the console window.

// const animal3 = new Animal("cat", "Siamese", "flame point", "45cm", "100cm")

// // for-of loop
// for (key of Object.keys(animal3)) {
//     console.log(key)
// }

// // vs. for-in loop
// for (key in Object.keys(animal3)) {
//    console.log(Object.keys(animal3)[key])
// }


// STEP 7
// Now, create a public method called speak. 
// Within the speak method you will use a conditional to check the type of Animal being created. 
// If it’s a dog, return “The <color> dog is barking!” 
// If it’s a cat return “The <color> cat is meowing!” instead. 
// Call that method after the Animal class has been instantiated.

// function Animal(type, breed, color, height, length) {
//     this._type = type
//     this._breed = breed
//     this._color = color
//     this._height = height
//     this._length = length
//     this.speak = function() {
//         if (this._type == "dog") {
//             return(`The ${this._color} dog is barking!`)
//         }
//         else if (this._type == "cat") {
//             return(`The ${this._color} cat is meowing!`)
//         }
//     }
// }
// const animal4 = new Animal("cat", "Siamese", "flame point", "45cm", "100cm")
// const animal5 = new Animal("dog", "Corgi", "black & tan", "75cm", "200cm")
// console.log(animal4.speak())
// console.log(animal5.speak())


// STEP 8
// Now, convert all of your properties to private properties. 
// Then, create a private method called checkType(). 
// In this method you will check to see what the type is. 
// If it’s dog, return dog, otherwise, return cat. 
// Then, create a privileged method called speak that returns the value of 
// the checkType() method. 
// The console window should now display “The <animal type> has made a noise!”

// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
//     function checkType() {
//         if (_type == "dog") {
//             return "dog"
//         }
//         else {
//             return "cat"
//         }
//     }
//     this.speak = function() {
//         return (`The ${checkType()} has made a noise!`)
//     }
// }
// const animal6 = new Animal("cat", "Siamese", "flame point", "45cm", "100cm")
// const animal7 = new Animal("dog", "Corgi", "black & tan", "75cm", "200cm")
// console.log(animal6.speak())
// console.log(animal7.speak())


// STEP 9

// Create your own String method called findWords that inherits from the native String Object. 
// This method should find all instances of a specific word within a provided paragraph of text.
// It should then alert out to the user the number of time that word was found in the paragraph.
// Remember, you’ll need to add your method to the String object’s prototype.

// String.prototype.findWords = function(word) {
//     let myregex = new RegExp(word, 'gi'); // case insensitive match all, including substring match
//     let matches = this.match(myregex)
//     let result = matches ? matches.length : 0
//     alert("Matches found for '" + word + "': " + result)
// }

// myText = "the quick brown fox jumped over the lazy dog"
// myText.findWords("the")
// myText.findWords("cat")

