const game = {
 round: 0,

pname : function (){ 
    let name1 =""
    let name2 ="" 

while(name1 == "" || name2 == ""){
     name1 =String(window.prompt("enter player1 name"))
     name2 =String(window.prompt("enter player2 name"))  
}

document.getElementById("name1").innerHTML += name1
document.getElementById("name2").innerHTML += name2
},

winner : function(){
    if(playerscore1 > playerscore2){
        window.alert(`the winner is ${name1}`)
    }
    else if(playerscore1 < playerscore2){
        window.alert(`the winner is ${name2}`)
    }
    else{
        window.alert(`draw`)
    }
}


}


function start_game(){
    let stg = ["X","O","X","O","X","O","X","O","X"]
    let btn = [
        document.getElementById("1"),
        document.getElementById("2"),
        document.getElementById("3"),
        document.getElementById("4"),
        document.getElementById("5"),
        document.getElementById("6"),
        document.getElementById("7"),
        document.getElementById("8"),
        document.getElementById("9"),
    ]

   for(let i = 0 ; i < stg.length ; i++){

        btn.forEach(Element => {document.getElementById(Element).innerHTML = stg[i]})
   
    }


    game.round++
    document.getElementById("round").innerHTML =` round :${game.round}`
    console.log("the game starts")

/*
   game.pname()*/
}


