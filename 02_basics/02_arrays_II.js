const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // this was the only way to add the dc_heroes array to the marvel_heroes array ( nested array, not merging the arrays )
console.log(marvel_heroes[3][1]) // flash

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes) // push = modifies the original array, concat = does not modify the original array

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)


const marvel_heroes2 = ["thor", "ironman", "spiderman"];
const dc_heroes2 = ["superman", "flash", "batman"];

const allNewHeroes = [... marvel_heroes2, ...dc_heroes2] // spread operator
console.log(allNewHeroes) // this is the best way to add the dc_heroes array to the marvel_heroes array (merge)

const anotherArr = [1,2,[1,2,3],6,7,8,[2,6,7,8,[2,5,6]]]
console.log(anotherArr.flat(Infinity)) // `flat` method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

console.log(Array.isArray("hello")) // false
console.log(Array.isArray([1,2,3,4])) // true

console.log(Array.from("hello")) // this will convert the string to an array
console.log(Array.from({name:"Abdur Rehman"})) // this will convert the object to an array, its showing empty array because object is not iterable