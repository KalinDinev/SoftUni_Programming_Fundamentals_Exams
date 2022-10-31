function coffeeLover(coffeList){
let list =coffeList.shift().split(" ")
let commandsCounter =Number(coffeList.shift())
let tokens =coffeList.shift();
while(commandsCounter > 0){

    
    let currentTokens =tokens.split(" ")
    let command =currentTokens[0];
    let index =currentTokens[1];

    if(command === "Include"){
        list.push(index)
        
    }
    if(command === "Remove"){
        //if you have fewer coffes in your list  than given numb skip command
        let afterIndex =Number(currentTokens[2]);
        if(index === "first"){
            list.splice(0,afterIndex)
        }else if(index === "last"){
            //check if is mistake ! afterIndex
            list.splice(-afterIndex,afterIndex)
        }
    }
    if(command === "Prefer"){
        index =Number(index)
        let secondIndex =Number(currentTokens[2])
        if(index >= 0 && index <= list.length && secondIndex >= 0 && secondIndex <= list.length){
            let buffer =list[index]
            list[index] = list[secondIndex]
            list[secondIndex] =buffer
        }
    }
    if(command === "Reverse"){
       list = list.reverse()
    }
     tokens =coffeList.shift()
    commandsCounter--;
}
console.log(`Coffees:
${list.join(" ")}`)

}
coffeeLover((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"]))