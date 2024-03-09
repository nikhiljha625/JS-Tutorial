

const arr=[1,2,3,4,5];

// for (const itr of arr) {
//     console.log(itr);
// }


// Mpas in JS

const map = new Map();

// --> Only unique values stored

map.set('IN',"INDIA");
map.set('US',"AMERICA");
map.set('Fr',"france");

// console.log(map);


// using for of loop 


//--> both key and value was got stored in key 
// for (const key of map) {
//     console.log(key);
// }

// ---> Destructured
// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`);
// }


// ...> doesn't work for object DS
// ---> Error : myobj is not iterable
const myobj = {
    name: "Nikhil",
    email : "abc@google.in",
}

// for (const key of myobj) {
//     console.log(key);
// }



// ****************//


// for in :- not works for map

// for (const key in myobj) {
//     console.log(`${key} :- ${myobj[key]}`)
// }


// Most imp :- For each loop

const coding = ["Cpp", 'java', 'javascript', "ruby"];

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// i can also pass a func ref instaead of a callback fun

function printme(item){
    console.log(item);
}

// coding.forEach(printme);  /// we have just passed the ref not executed the func


// actual me hua ye h jo line 64 me h ki wo bas naam likh diya h hmne waha but actual me waha assume karo ki func def,h



// ---> 3 parameters hote h actual me
// coding.forEach( (item,i,coding) => {
//     console.log(item + " " + i + " " + coding);
// })


// used in arr of obj


const mycoding = [
    {
        name : "nikhilCPP",
        Language : "Cpp",
    },
    {
        name : "nikhilJava",
        Language : "java",
    },
    {
        name : "nikhilJS",
        Language : "Js",
    },
]

mycoding.forEach( (item) => {
    console.log(item);
    console.log(item.name);
})

