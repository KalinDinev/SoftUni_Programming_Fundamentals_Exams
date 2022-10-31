function shipsWar(data){

    let pirateShipStatus =data.shift().split(">").map(Number)
    let warShipStatus =data.shift().split(">").map(Number)
    let maxHealth =Number(data.shift());
    let isSunken =false;

    let tokens =data.shift().split(" ")
    
    while(tokens !="Retire"){
        let command =tokens[0];

        switch(command){
            case"Fire": 
            let index =Number(tokens[1]);
            let damage =Number(tokens[2]);

            if(index >= 0 && index <= warShipStatus.length-1){
               warShipStatus[index]-=damage
               if(warShipStatus[index] <= 0){
                console.log("You won! The enemy ship has sunken.")
                isSunken =true;
                break;
               }
               }

            break;
            case"Defend":
            let startingIndex =Number(tokens[1]);
            let endIndex =Number(tokens[2]);
            let dmg =Number(tokens[3]);
               if(startingIndex >= 0 && startingIndex <= pirateShipStatus.length -1 && endIndex > 0 && endIndex <= pirateShipStatus.length -1){

                for(let start =startingIndex;start <= endIndex;start++){
                    pirateShipStatus[start]-=dmg;
                    if(pirateShipStatus[start] <= 0){
                        console.log("You lost! The pirate ship has sunken.")
                        isSunken =true;
                        break;
                    }
                }
            }
            break;
            case"Repair":
            let repairIndex =Number(tokens[1]);
            let healthToRepair =Number(tokens[2]);
            if(repairIndex >=0 && repairIndex <= pirateShipStatus.length-1){
                
                if(pirateShipStatus[repairIndex] + healthToRepair > maxHealth){
                    pirateShipStatus[repairIndex] =maxHealth;
                }else{
                    pirateShipStatus[repairIndex]+=healthToRepair
                }
            }
            break;
            case"Status":
            let count =0;
            let afterPercentage =maxHealth * 0.2;
            for(let element of pirateShipStatus){
                if(element < afterPercentage){
                    count++;
                }
            }
            console.log(`${count} sections need repair.`)
            break;
        }
        if(isSunken){
        break;
           }else{
            tokens =data.shift().split(" ")
        }   
    }
    if(isSunken){
        
    }else{
    
    let pirateShipSum =0;
    let warShipSum =0;

    for(let el of pirateShipStatus){
        pirateShipSum+=el
    }

    for(let el of warShipStatus){
        warShipSum+= el
    }

    console.log(`Pirate ship status: ${pirateShipSum}`)
    console.log(`Warship status: ${warShipSum}`)
}
}
shipsWar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]))

// First, we receive the command "Fire 2 11", and damage the warship at section index 2, which is currently 33, and after reduction, the status of the warship is the following:
// 12 22 22 44 55 32 18
// The second and third commands have invalid indexes, so we skip them.
// The fourth command, "Defend 0 3 5" damages 4 sections of the pirate ship with 5, which results in the following states:
// 7 8 6 15 66
// The fifth command, "Repair 1 33" repairs the pirate ship section and adds 33 health to the current 8, which results in 41
// Only 2 sections of the pirate ship (7 and 6) need repair soon.
// In the end, there is a stalemate, so we print both ship statuses (sum of all sections).

