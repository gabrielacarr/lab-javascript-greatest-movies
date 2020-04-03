/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - 
// Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    let  arrCopy = [...arr];
   
    let sortedArray = arrCopy.sort((a,b) => {
        if (a.year === b.year) {
            a.title.localeCompare(b.title); 
        } else {
            return a.year - b.year;
        }
    })
return sortedArray;
}

// This is from my macbook pro

// Iteration 2: Steven Spielberg. The best? - 
// How many drama movies did STEVEN SPIELBERG direct

// Go ahead and create a `howManyMovies()` function that 
// receives an array as a parameter and `filter` :eyes: 
// the array so we can have only the **drama** movies where 
// **Steven Spielberg** is the director.

const owManyMovies = (arr) => {

}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
