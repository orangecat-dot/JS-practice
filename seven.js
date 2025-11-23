// Shuffle an array: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// step 1: create an i that loop to all array elements
// Step 2: create a j to get a random value from 0 to i 
// Step 3: swap element i and j in the arrays

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // pick a random index from 0 to i
      let j = Math.floor(Math.random() * (i + 1));
  
      // swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }