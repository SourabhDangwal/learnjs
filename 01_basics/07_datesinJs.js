let myDate = new Date()
console.log(myDate);//gives a non readable  value but i personally think now it gives readable value like it is giving in  vs code
console.log(myDate.toString());//make it readable by converting into string
console.log(myDate.toDateString())//gives in some format like thu aug 29 2024
console.log(myDate.toLocaleString());//29/8/2024 10:15:41 am
//when not given value to them they create this instance date
console.log(typeof myDate);//object

// let myCreatedDate = new Date(2024,7,29)//in javascript month starts with 0 i.e.  0=> January

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024,7,29,10,28)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-08-29")//to give a specific format we use this method also here we ar usin mm for months so we can call months normaly according to there occurence number



