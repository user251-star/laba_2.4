//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */

 //   Способ 1 
function getIntervalArray() {
   
const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
    // Способ 2
function getIntervalArray() {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
    // Способ 1
function sumArrays(arr1,arr2) {
const len = Math.max(arr1.length, arr2.length);
const result = [];
    for (let i = 0; i < len; i++) {
        result.push((arr1[i],0) + (arr2[i],0));
    }
return result;
}
    // Способ 2
function sumArrays(arr1,arr2) {
    const len = Math.max(arr1.length, arr2.length);
    return Array.from({ length: len }, (_, i) => (arr1[i],0) + (arr2[i],0));
}

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
    // Способ 1
function findElement(arr,value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
return -1; 
}
// Способ 2
function findElement(arr,value) {
  return arr.indexOf(value);
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
    // Способ 1
function findAllOccurrences(arr,item) {
let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) count++;
    }
return count;
}
    // Способ 2
function findAllOccurrences(arr,item) {
  return arr.filter((el) => el === item).length;
}

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
    // Способ 1
function removeFalsyValues(arr) {
const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) result.push(arr[i]);
    }
return result;
}
    // Способ 2
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
    // Способ 1
function getStringsLength(arr) {
const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }
return result;
}
    // Способ 2
function getStringsLength(arr) {
  return arr.map((s) => s.length);
}

/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
    // Способ 1
function getAverage(arr) {
if (arr.length === 0) return 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return Math.round((sum / arr.length) * 100) / 100;
}
    // Способ 2
function getAverage(arr) {
if (arr.length === 0) return 0;
const sum = arr.reduce((acc, n) => acc + n, 0);
return Math.round((sum / arr.length) * 100) / 100;
}

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
    // Способ 1
function isSameLength(arr) {
if (arr.length === 0) return true;
const firstLen = arr[0].length;
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== firstLen) return false;
}
return true;
}
    // Способ 2
function isSameLength(arr) {
return arr.every((s) => s.length === arr[0].length);
}
/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
    // Способ 1
function isValueEqualsIndex(arr) {
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) return true;
}
return false;
}
    // Способ 2
function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);    
}
/**
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
    //Способ 1
function insertItem(arr, item, index) {
  const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) result.push(item);
        result.push(arr[i]);
    }
    if (index >= arr.length) 
    result.push(item);
    return result;
}
    //Способ 2
function insertItem(arr, item, index) {
    const result = [...arr];
    result.splice(index, 0, item);
    return result;
}

/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
    //Способ 1
function getHead(arr, n) {
const result = [];
    for (let i = 0; i < n && i < arr.length; i++) {
        result.push(arr[i]);
    }
return result;
}
    //Способ 2
function getHead(arr, n) {
return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
    //Способ 1
function getTail(arr, n) {
const result = [];
const start = Math.max(0, arr.length - n);
    for (let i = start; i < arr.length; i++) {
        result.push(arr[i]);
    }
return result;
}
    //Способ 2
function getTail(arr, n) {
return n <= 0 ? [] : arr.slice(-n);
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
    //Способ 1
function doubleArray(arr) {
  const result = [];
    for (let i = 0; i < arr.length; i++) result.push(arr[i]);
    for (let i = 0; i < arr.length; i++) result.push(arr[i]);
return result;
}
    //Способ 2
function doubleArray(arr) {
  return [...arr, ...arr];
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
    //Способ 1
function toStringList(arr) {
let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) result += ',';
        result += String(arr[i]);
    }
return result;

}
    //Способ 2
function toStringList(arr) {
return arr.join(',');
}


/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
    //Способ 1
function distinct(arr) {
const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) result.push(arr[i]);
    }
return result;
}
    //Способ 2
function distinct(arr) {
return [...new Set(arr)];
}

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
    //Способ 1
function createNDimensionalArray(n, size) {
if (n === 1) return new Array(size).fill(0);
const result = [];
for (let i = 0; i < size; i++) {
    result.push(createNDimensionalArray(n - 1, size));
}
return result;
}
    //Способ 2
function createNDimensionalArray(n, size) {
if (n === 1) return Array(size).fill(0);
return Array.from({ length: size }, () => createNDimensionalArray(n - 1, size));
}

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
    //Способ 1
function flattenArray(nestedArray) {
const result = [];
for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
        const inner = flattenArray(nestedArray[i]);
        for (let j = 0; j < inner.length; j++) result.push(inner[j]);
    } else {
        result.push(nestedArray[i]);
    }
}
return result;
}
    //Способ 2
function flattenArray(nestedArray) {
return nestedArray.flat(Infinity);
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
    //Способ 1
function selectMany(arr, childrenSelector) {
const result = [];
for (let i = 0; i < arr.length; i++) {
    const children = childrenSelector(arr[i]);
    for (let j = 0; j < children.length; j++) {
        result.push(children[j]);
    }
}
return result;
}
    //Способ 2
function selectMany(arr, childrenSelector) {
return arr.map(childrenSelector).flat(Infinity);
}

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
    //Способ 1
function calculateBalance(arr) {
let balance = 0;
for (let i = 0; i < arr.length; i++) {
    balance += arr[i][0] - arr[i][1];
}
return balance;

}
    //Способ 2
function calculateBalance(arr) {
return arr.reduce((acc, [income, expense]) => acc + income - expense, 0);

}

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
    //Способ 1
function createChunks(arr, chunkSize) {
const result = [];
for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
}
return result;
}
    //Способ 2
function createChunks(arr, chunkSize) {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) },
 (_, i) => arr.slice(i * chunkSize, (i + 1) * chunkSize));
}

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
    //Способ 1
function generateOdds(len) {
const result = [];
for (let i = 0; i < len; i++) {
    result.push(i * 2 + 1);
}
return result;
}
    //Способ 2
function generateOdds(len) {
return Array.from({ length: len }, (_, i) => i * 2 + 1);
}

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
    //Способ 1
function getElementByIndices(arr, indices) {
let current = arr;
for (let i = 0; i < indices.length; i++) {
    current = current[indices[i]];
}
return current;
}
    //Способ 2
function getElementByIndices(arr, indices) {
return indices.reduce((acc, idx) => acc[idx], arr);
}

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
    //Способ 1
function getFalsyValuesCount(arr) {
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) count++;
}
return count;
}
    //Способ 2
function getFalsyValuesCount(arr) {
return arr.filter((v) => !v).length;
}

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
    //Способ 1
function getIdentityMatrix(n) {
const result = [];
for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
        row.push(i === j ? 1 : 0);
    }
    result.push(row);
}
return result;

}
    //Способ 2
function getIdentityMatrix(n) {
return Array.from({ length: n }, (_, i) =>
Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
}

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
    //Способ 1
function getIndicesOfOddNumbers(numbers) {
const result = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) result.push(i);
}
return result;
}
    //Способ 2
function getIndicesOfOddNumbers(numbers) {
return numbers.reduce((acc, n, i) => (n % 2 !== 0 ? [...acc, i] : acc), []);
}

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
    //Способ 1
function getHexRGBValues(arr) {
const result = [];
for (let i = 0; i < arr.length; i++) {
result.push('#' + arr[i].toString(16).toUpperCase().padStart(6, '0'));
}
return result;
}
    //Способ 2
function getHexRGBValues(arr) {
return arr.map((n) => '#' + n.toString(16).toUpperCase().padStart(6, '0'));
}

/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
    //Способ 1 
function getMaxItems(arr, n) {
const sorted = arr.slice().sort((a, b) => b - a);
const result = [];
for (let i = 0; i < n && i < sorted.length; i++) {
    result.push(sorted[i]);
}
return result;
}
    //Способ 2
function getMaxItems(arr, n) {
return arr.slice().sort((a, b) => b - a).slice(0, n);
}


/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
    //Способ 1
function findCommonElements(arr1, arr2) {
const result = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
        result.push(arr1[i]);
    }
}
return result;
}
    //Способ 2
function findCommonElements(arr1, arr2) {
return arr1.filter((v) => arr2.includes(v))
.filter((v, i, a) => a.indexOf(v) === i);
}

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
    //Способ 1
function findLongestIncreasingSubsequence(nums) {
if (nums.length === 0) return 0;
let maxLen = 1;
let curLen = 1;
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
        curLen++;
    if (curLen > maxLen) maxLen = curLen;
    } else {
        curLen = 1;
    }
}
return maxLen;
}
    //Способ 2
function findLongestIncreasingSubsequence(nums) {
if (nums.length === 0) return 0;
let maxLen = 1, curLen = 1;
nums.reduce((prev, curr) => {
    curLen = curr > prev ? curLen + 1 : 1;
    if (curLen > maxLen) maxLen = curLen;
    return curr;
});
return maxLen;
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
    //Способ 1
function propagateItemsByPositionIndex(arr) {
const result = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
        result.push(arr[i]);
    }
}
return result;
}
    //Способ 2
function propagateItemsByPositionIndex(arr) {
return arr.flatMap((item, i) => Array(i + 1).fill(item));
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
    //Способ 1
function shiftArray(arr, n) {
if (arr.length === 0) return [];
const len = arr.length;
let shift = n % len;
if (shift < 0) shift += len;
const result = [];
for (let i = 0; i < len; i++) {
    result.push(arr[(i - shift + len) % len]);
}
return result;
}
    //Способ 2
function shiftArray(arr, n) {
if (arr.length === 0) return [];
const len = arr.length;
let shift = ((n % len) + len) % len;
return arr.slice(-shift).concat(arr.slice(0, len - shift)); 
}

/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
    //Способ 1
function sortDigitNamesByNumericOrder(arr) {
const result = arr.slice();
for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
        if (digitOrder[result[j]] > digitOrder[result[j + 1]]) {
            [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
    }
}
return result;
}
    //Способ 2
function sortDigitNamesByNumericOrder(arr) {
return arr.slice().sort((a, b) => digitOrder[a] - digitOrder[b]);
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
    //Способ 1
function swapHeadAndTail(arr) {
const len = arr.length;
const half = Math.floor(len / 2);
const result = [];
for (let i = len - half; i < len; i++) result.push(arr[i]);
if (len % 2 !== 0) result.push(arr[half]);
for (let i = 0; i < half; i++) result.push(arr[i]);
return result;
}
    //Способ 2
function swapHeadAndTail(arr) {
const len = arr.length;
const half = Math.floor(len / 2);
const head = arr.slice(0, half);
const tail = arr.slice(len - half);
const middle = len % 2 !== 0 ? [arr[half]] : [];
return [...tail, ...middle, ...head];
}
