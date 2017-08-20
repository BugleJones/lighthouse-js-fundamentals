function merge(arrayOne, arrayTwo) {
  arrayOneSorted = arrayOne.sort();
  arrayTwoSorted = arrayTwo.sort();

  for (var i = 0; i < arrayTwoSorted.length; i++) {
  arrayOneSorted.push(arrayTwoSorted[i]);
  }

  return arrayOneSorted.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);