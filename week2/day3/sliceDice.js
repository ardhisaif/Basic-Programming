
function slice(data, start, end){
    if(start === undefined && end === undefined){
        return data
    }else if(start > data.length){
        return []
    }else if(end === undefined ){
        end = data.length
    }
    let animals = []
    for(let i = 0 ; i < (end - start) ; i++){
        animals.push(data[start + i]) 
    }
    return animals
    
}
  
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, )); // [ 'camel', 'duck', 'elephant' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]
// // let fruits = ['Apple', 'Banana']

// console.log(fruits.length)
// // 2


// fruits.forEach(function(item, index, array) {
//     console.log(item, index)
//   })
//   // Apple 0
//   // Banana 1

//   let newLength = fruits.push('Orange')
// // ["Apple", "Banana", "Orange"]

// console.log(fruits);

// let last = fruits.pop() // remove Orange (from the end)
// // ["Apple", "Banana"]

// console.log(fruits)

// let first = fruits.shift() // remove Apple from the front
// // ["Banana"]

// console.log(fruits)

// let newLength2 = fruits.unshift('Strawberry') // add to the front
// // ["Strawberry", "Banana"]

// console.log(fruits);

// fruits.push('Mango')
// // ["Strawberry", "Banana", "Mango"]

// let pos = fruits.indexOf('Banana')
// // 1

// console.log(fruits);
// console.log(pos);

// let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// // ["Strawberry", "Mango"]
// console.log(fruits);

// let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
// console.log(vegetables)
// // ["Cabbage", "Turnip", "Radish", "Carrot"]


// let n = 2

// let removedItems = vegetables.splice(pos, n)
// // this is how to remove items, n defines the number of items to be removed,
// // starting at the index position specified by pos and progressing toward the end of array.

// console.log(vegetables)
// // ["Cabbage", "Carrot"] (the original array is changed)

// console.log(removedItems)
// // ["Turnip", "Radish"]

// let shallowCopy = fruits.slice() // this is how to make a copy
// // ["Strawberry", "Mango"]

// console.log(fruits);

// let arr = ['this is the first element', 'this is the second element', 'this is the last element']
// console.log(arr[0])              // logs 'this is the first element'
// console.log(arr[1])              // logs 'this is the second element'
// console.log(arr[arr.length - 1]) // logs 'this is the last element' ;


// let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]

