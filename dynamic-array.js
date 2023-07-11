
class DynamicArray {
  constructor(capacity = 4) {
    // Set the initial capacity for the dynamic array
    this.capacity = capacity;

    // Initialize the length of the dynamic array to 0
    this.length = 0;

    // Create a new array with the specified capacity
    this.data = new Array(capacity);
  }

  read(index) {
    // Retrieve the element at the given index from the array
    return this.data[index];
  }

  push(value) {
    // Check if the array is already at its capacity
    if (this.length === this.capacity) {
      // If it is, resize the array to increase its capacity
      this.resize();
    }

    // Add the value to the end of the array
    this.data[this.length] = value;

    // Increment the length of the array
    this.length++;
  }

  pop() {
    // Check if the array is empty
    if (this.length === 0) {
      // If it is, return undefined
      return undefined;
    }

    // Retrieve the last value in the array
    const lastValue = this.data[this.length - 1];

    // Set the last value in the array to undefined
    this.data[this.length - 1] = undefined;

    // Decrement the length of the array
    this.length--;

    // Return the last value that was removed
    return lastValue;
  }

  unshift(value) {
    // Check if the array is already at its capacity
    if (this.length === this.capacity) {
      // If it is, resize the array to increase its capacity
      this.resize();
    }

    // Shift all elements to the right by one position
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    // Insert the new value at the beginning of the array
    this.data[0] = value;

    // Increment the length of the array
    this.length++;
  }

  shift() {
    // Check if the array is empty
    if (this.length === 0) {
      // If it is, return undefined
      return undefined;
    }

    // Retrieve the first value in the array
    const firstValue = this.data[0];

    // Shift all elements to the left by one position
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Set the last value in the array to undefined
    this.data[this.length - 1] = undefined;

    // Decrement the length of the array
    this.length--;

    // Return the first value that was removed
    return firstValue;
  }

  indexOf(value) {
    // Iterate over each element in the array
    for (let i = 0; i < this.length; i++) {
      // Check if the current element matches the given value
      if (this.data[i] === value) {
        // If it does, return the index of the element
        return i;
      }
    }

    // If the value is not found, return -1
    return -1;
  }

  resize() {
    // Double the current capacity of the array
    this.capacity *= 2;

    // Create a new array with the updated capacity
    const newData = new Array(this.capacity);

    // Copy all elements from the old array to the new array
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    // Replace the old array with the new array
    this.data = newData;
  }
}


module.exports = DynamicArray;
