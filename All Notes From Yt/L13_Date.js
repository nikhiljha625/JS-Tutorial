let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())


let newDate = new Date();
newDate.toLocaleDateString('default',{
    weekday: "long"
})


