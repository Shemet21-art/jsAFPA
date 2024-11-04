//############################//
//                            //
// Taxi          //
//                            //
//############################//

let jonh = { 
    mentalHealth: 10, 
    trafficLights:30,
    taxiNumber:1, 
    changeMentalHealth: function(){
        this.mentalHealth--
    },
    changeTraffic: function(){
        this.trafficLights--
    },
    changeTaxi:function(){
        this.taxiNumber++
    }

}

let listMusic = ["Anissa-Wejdene", "Lambo","Big Tape","Guzul","Hello"]

while(jonh.trafficLights>0){
    listMusic.forEach(e => {
        jonh.changeTraffic()
        
        if(e == "Anissa-Wejdene")
        jonh.changeMentalHealth(),
        jonh.changeTaxi()
        console.log("Song Title",e)
        console.log("Amount of healf",jonh.mentalHealth)
        console.log("Amount of lightsRed",jonh.trafficLights)
        console.log("Taxi",jonh.taxiNumber)
    });
   
}

// Taxi 2 
const songs = [
    "The Weeknd - Blinding Lights",
    "Daft Punk - One More Time",
    "Adele - Rolling in the Deep",
    "Ed Sheeran - Shape of You",
    "Anissa - Wejdene"
];

let hero = {
    firstName : "Samih",
    health: 10,
    looseHealthPoint : function () {
        this.health--;
    },
    playMusic : function () {
        const indexMusic = Math.floor(Math.random() * (5));
        return songs[indexMusic];
    }
};

let nbrLights = 30;

while (hero.health > 0 && nbrLights > 0) {

    let musicPlayed = hero.playMusic();

    if(musicPlayed === "Anissa - Wejdene") {
        hero.looseHealthPoint();
        console.log("Your are loossing health point... Anissa has been played");
    } else {
        console.log("You are lucky, you just crossed the light !");
    }

    nbrLights--;
    console.log("Number of lights reamining : " + nbrLights);

}

if(hero.health > 0) {
    alert("Congratulations, you survived 30 lights !");
} else {
    alert("Hahhaha you head exploded");
}