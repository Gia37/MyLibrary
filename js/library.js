// Creando función myFilter - https://www.w3schools.com/jsref/jsref_filter.asp

function myForEach(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        callback(array[i]);
    }
}

var array = [1, 2, 3, 4, 5, 6];
// console.log(myForEach(array, element => console.log(element*2))); 


function myFilter(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

var array = [1, 2, 3, 4, 5, 6];
// console.log(myFilter(array, element => element > 9)); 


// Creando función myMap - https://www.w3schools.com/jsref/jsref_map.asp

function myMap(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++ ) {
            newArray.push(callback(array[i]));
    }
    return newArray;
}

var array = [1, 2, 3, 4, 5, 6];
//console.log(myMap(array, element => element * 2));


// Creando función myFind - https://www.w3schools.com/jsref/jsref_find.asp

function myFind(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
      if(callback(array[i])){
        return array[i];
      }  
    }
}
var array = [1, 2, 3, 4, 5, 6];
//console.log(myFind(array, element => element > 12)); 

// Creando función myFindIndex - https://www.w3schools.com/jsref/jsref_findindex.asp

function myFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
      if(callback(array[i])){
        return i;
      }  
    }
   return -1;
}
var array = [4, 9, 16, 25];
//console.log(myFindIndex(array, element => element > 12))

// Creando función myContains - https://underscorejs.org/#contains

function myContains(array, callback) {
    for(let i = 0; i < array.length; i++) {
      if(callback(array[i])) {
        return true;
      }
    }
  return false;
}
var array = [1, 2, 3, 4, 5, 6];
//console.log(myContains(array, element => element === 79)); 


// Creando función myPluck - https://underscorejs.org/#pluck

function myPluck(array, propiedad) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
      newArray.push(array[i][propiedad]);
    }
    return newArray;
}
var arreglo = [{nombre: 'moe', edad: 40}, {nombre: 'larry', edad: 50}, {nombre: 'rizado', edad: 60}];
//console.log(myPluck(arreglo,'edad')); 


// Creando función myWithout - https://underscorejs.org/#without
