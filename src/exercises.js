function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a[0] ===b[0]) {

   return true;

 }

 else if (a[a.length-1] === b[b.length-1]) {

   return true;

 }

 else {

   return false;
 }
}

function endsMeet(values, n) {
  let empty = [];
  let arr = [];
  if (!values || values.length < n || n < 0) {
    return arr;
  }
  for (i = 0; i < n; i++) {
    arr.push(values[i]);
  }
  for (z = values.length - n; z < values.length; z++) {
    arr.push(values[z])
  }
  if (n === 0) {
    return empty;
  }
  return arr
}

function difference(numbers) {
  let difference = 0;
  let large = 0;
  let small = 0;
  let counter = 0;
  if (!numbers || numbers.length <= 0) {
    difference = undefined
    return difference;
  }
  if (numbers.some(isNaN)) {
    return undefined;
    counter = 1
  }
  if (counter != 1) {
    let y = Number.MIN_SAFE_INTEGER
    for (z = 0; z < numbers.length; z++) {
      if (numbers[z] > y) {
        y = numbers[z];
        large = numbers[z];
      }
    }
    if (counter != 1) {
      let v = Number.MAX_SAFE_INTEGER
      for (x = 0; x < numbers.length; x++) {
        if (numbers[x] < v) {
          v = numbers[x];
          small = numbers[x];
        }
      }
      difference = large - small;
      return difference;
    }
  }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 == 0) {
     return undefined;
   }
   if (number.some(isNaN)) {
     return undefined;
   }
   let first = number[0]
   let last = number[number.length-1]
   let middle = number[((number.length/2)-1) + 0.5]
   if ((first > last) && (first > middle)) {
     return first;
   }
   else if ((middle > last) && (middle > first)) {
     return middle;
   }
   else if ((last > first) && (last > middle)) {
     return last;
   }
   else {
     return first;
   }
}

function middle(values) {
  let array = []
    if (!values || values.length < 3 || values.length % 2 == 0) {
      return [];
    }
    let index = (values.length/2)-1 + 0.5
    let two_middle = values[index]
    let one_middle = values[index - 1]
    let three_middle = values[index + 1]
    array.push(one_middle);
    array.push(two_middle);
    array.push(three_middle);
    return array;
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
