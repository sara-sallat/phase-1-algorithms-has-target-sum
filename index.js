function hasTargetSum(array, target) {
  // Write your algorithm here
  let isTrue = false

  for(i = 0; i < array.length; i++ ){
    for(j= i+1; j < array.length; j++){
      if(array[i] + array[j] === target){
        isTrue = true
      }
    }
  }

  return isTrue
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 97], 100))

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
 Create a for loop which will visit all the array elements
 Create a nested for loop which will visit rest of the array elements for each element
 Create a sum function to compare the result with target value
 Return true or false according to the result
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
