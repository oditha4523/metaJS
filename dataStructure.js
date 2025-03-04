const fruits=["apple","ornge","mango","papaya"];

function appendix(fruit,index){
    console.log(`${index} : ${fruit}`);
}

fruits.forEach(appendix);

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)