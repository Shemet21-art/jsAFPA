//############################//
//                            //
//  ARRAYS                    //
//                            //
//############################//


// EN JS TOUT EST OBJET
// STRING - INT - ARRAY - BALISE HTML

let numbers = [23, 78, 991];
let names = ["Samih", "Nicolas", "Daniel"];
let infos = [22, "Samih", true, ["armes à feu", "chasse", "pêche"]];

console.log(infos[1]); // Samih
console.log(infos[3][1]); // chasse

// push
numbers.push(22);
// slice
console.log(names.slice(1,2)); // Nicolas
// length

//############################//
//                            //
//  OBJECT                    //
//                            //
//############################//


let wajdi = {
    weight: 85,
    age: 25,
    firstName: "Wajdi",
    hobbies: ['Muscl','The','caffe'],
    reviseCours: function (){
        console.log('hi Samih')
    },
    eat: function(){
        this.weight++
    }
}

console.log(wajdi.age)
console.log(wajdi.weight)
wajdi.eat()
console.log(wajdi.weight)