//############################//
//                            //
// Le toueur                  //
//                            //
//############################//

let jason = {
    health: 100,
}



let probability = [0.2, 0.6, 0.8, 0.3, 0.4]

let survivors = ['blonde','smart','fast', 'athletic','strong']


while(jason.health > 0){ 
   
    console.log(survivors)
    const indexName = Math.floor(Math.random() * (5));
    let name = survivors[indexName];
    const indexValue = Math.floor(Math.random() * (5));
    let value = probability[indexValue];
    if( value < 0.4){ 
       console.log('Die', name, value)
       survivors.splice(indexName,1)
       console.log("первый",survivors)
       
    }
    else if ( value > 0.4 && value < 0.7){
        jason.health = jason.health - 10
        console.log("-10", name, value)
    }
    else if (value > 0.7) {
        jason.health = jason.health - 15
        survivors.splice(indexName,1)
        console.log("-15",name,value)
    }
    jason.health--
}
