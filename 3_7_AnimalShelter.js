console.clear();

class Stack {
  constructor() {
    this.items = [];
  }
  
  push(ele) {
    this.items.push(ele);
  }
  
  pop() {
    if (this.items.length === 0) return;
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

class Animal {
  constructor(animal, nextNode) {
    this.animal = animal;
    this.nextNode = nextNode;
  }
}

class AnimalShelter {
  constructor() {
    this.headNode = new Animal(null, null);
    this.lastNode = this.headNode;
  }
  
  enqueue(animal) {
    var newAnimal = new Animal(animal, null);
    this.lastNode.nextNode = newAnimal;
    this.lastNode = newAnimal; // move pointer
  }
  
  toArray() {
    var array = [];
    var currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      array.push(currentNode.nextNode.animal);
      currentNode = currentNode.nextNode;
    }
    
    return array;
  }
  
  dequeueAny(animal) {
    this.headNode = this.headNode.nextNode;
  }
  
  dequeueDog() {
    if (this.headNode.animal === "dog") {
      this.headNode = this.headNode.nextNode;
      return;
    }
  
    var currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      if (currentNode.nextNode.animal === "dog") {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return;
      }
      currentNode = currentNode.nextNode;
    }
    
    console.log("There's no dog in the shelter");
  }
  
  dequeueCat() {
    if (this.headNode.animal === "cat") {
      this.headNode = this.headNode.nextNode;
      return;
    }
  
    var currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      if (currentNode.nextNode.animal === "cat") {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return;
      }
      currentNode = currentNode.nextNode;
    }
    
    console.log("There's no cat in the shelter");
  }
}

var shelter = new AnimalShelter();
shelter.enqueue("dog");
shelter.enqueue("dog");
shelter.enqueue("cat");
shelter.enqueue("dog");
shelter.enqueue("dog");
/* shelter.enqueue("cat");
shelter.enqueue("cat");
shelter.enqueue("dog");
shelter.enqueue("cat");
shelter.enqueue("cat"); */
console.log(shelter.toArray());
shelter.dequeueDog();
console.log(shelter.toArray());
/* shelter.dequeueAny(); */
shelter.dequeueCat();
console.log(shelter.toArray());

