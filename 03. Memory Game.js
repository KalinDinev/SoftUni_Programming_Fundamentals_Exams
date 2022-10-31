function memoryGame(elements) {
  let sequanceOfElements = elements.shift().split(" ");
  let copiedArr = sequanceOfElements.slice();

  let command = elements.shift();
  let counter = 0;
  let numberMoves = 0;

  while (command != "end") {
    numberMoves++;

    let int = command.split(" ");
    let firstIndex = int[0];
    let secondIndex = int[1];

    if (
      firstIndex === secondIndex ||
      firstIndex > sequanceOfElements.length - 1 ||
      secondIndex < 0 ||
      firstIndex < 0 ||
      secondIndex > sequanceOfElements.length - 1
    ) {
      console.log(`Invalid input! Adding additional elements to the board`);
      let middle = sequanceOfElements.length / 2;
      let numsToMove = `-${numberMoves}a`;
      sequanceOfElements.splice(middle, 0, numsToMove, numsToMove);
      command = elements.shift();
      continue;
    }
    if (sequanceOfElements[firstIndex] === sequanceOfElements[secondIndex]) {
      counter++;
      console.log(
        `Congrats! You have found matching elements - ${sequanceOfElements[firstIndex]}!`
      );
      if (firstIndex > secondIndex) {
        sequanceOfElements.splice(firstIndex, 1);
        sequanceOfElements.splice(secondIndex, 1);
      } else {
        sequanceOfElements.splice(secondIndex, 1);
        sequanceOfElements.splice(firstIndex, 1);
      }
    } else {
      console.log(`Try again!`);
    }

    if (sequanceOfElements.length <= 0) {
      console.log(`You have won in ${counter} turns!`);
      break;
    } else {
      command = elements.shift();
    }
  }
  if (sequanceOfElements.length > 0) {
    console.log(`Sorry you lose :(
${sequanceOfElements.join(" ")}`);
  }
}
// memoryGame( [
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
//     ])
console.log(`-------------`);

memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
