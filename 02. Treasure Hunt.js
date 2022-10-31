function tresureHunt(input){

    let modifiedArr =input.shift().split("|")
    let tokens =input.shift().split(" ")
    
    while(tokens != "Yohoho!"){
        
        let command =tokens[0];
        let index =tokens[1];

        
        switch(command){
            case"Loot":
                for(let i =1;i<tokens.length;i++){
                    let currentElement =tokens[i];
                    if(!modifiedArr.includes(currentElement)){
                       modifiedArr.unshift(currentElement)
                    }
                }
            break;

            case"Drop": 
            if(index >= 0  && index <= modifiedArr.length -1 ){
            let element =modifiedArr[index];
            modifiedArr.splice(index,1)
            modifiedArr.push(element)
            
            }  
            break;
            case"Steal": 
            index =Number(index)
            let cutElements =modifiedArr.splice(-index)
            console.log(cutElements.join(", "))
            break;

        }

        tokens =input.shift().split(" ")
    }
    if(modifiedArr.length !=0){
        let counter =0;
        let sum =0;

        for(let element of modifiedArr){
            sum+=element.length
            counter++;
        }
        let avg =sum / counter;
        
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`)

    }else{
        console.log(`Failed treasure hunt.`)
    }

}
tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
// The first command "Loot Wood Gold Coins" adds Wood and Coins to the chest but omits Gold since it is already contained. The chest now has the following items:
// Coins Wood Gold Silver Bronze Medallion Cup
// The second command adds only Pistol to the chest
// The third command "Drop 3" removes the Gold from the chest, but immediately adds it at the end:
// Pistol Coins Wood Silver Bronze Medallion Cup Gold
// The fourth command "Steal 3" removes the last 3 items Medallion, Cup, Gold from the chest and prints them. 
// In the end calculate the average treasure gain which is the sum of all items length Pistol(6) + Coins(5) + Wood(4)  + Silver(6) + Bronze(6) = 27 and divide it by the count 27 / 5 = 5.4 and format it to the second decimal point.

