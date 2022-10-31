function inventory(input) {
  let sequance = input.shift().split(", ");
  let tokens = input.shift().split(" - ");

  while (tokens != "Craft!") {
    let command = tokens[0];
    let item = tokens[1];

    switch (command) {
      case "Collect":
        if (sequance.includes(item)) {
        } else {
          sequance.push(item);
          break;
        }

        break;
      case "Drop":
        if (sequance.includes(item)) {
          let currentIndex = sequance.indexOf(item);
          sequance.splice(currentIndex, 1);
        }

        break;
      case "Combine Items":
        let oldItem = item.split(":");

        if (sequance.includes(oldItem[0])) {
          let currentIndex = sequance.indexOf(oldItem[0]);
          let newItem = oldItem[1];
          sequance.splice(currentIndex + 1, 0, newItem);
        }

        break;
      case "Renew":
        if (sequance.includes(item)) {
          let currentIndex = sequance.indexOf(item);
          let itemToMove = sequance.splice(currentIndex, 1).join();
          sequance.push(itemToMove);
        }

        break;
      default:
        break;
    }
    tokens = input.shift().split(" - ");
  }
  console.log(sequance.join(", "));
}
inventory([
  "Iron, Sword",
  // "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
console.log("---------------");
inventory(["Iron, Wood, Sword", "Collect - Gold", "Sick - Wood", "Craft!"]);
