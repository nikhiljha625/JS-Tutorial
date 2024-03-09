
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descriptor);

const chai = {
    name : 'ginger chai',
    price : 250,

    orderChai : function (){
        console.log(`Chai ordered`);
    }
}

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
        console.log(`${key} : ${value}`);
}
Object.defineProperty(chai,'name', {
    writable : false,
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));