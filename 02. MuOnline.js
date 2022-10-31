function muOnlineGame(rooms) {
  let modifiedArr = rooms.split("|");
  let health = 100;
  let bitcoins = 0;
  let room = 0;
  let isTime = false;
  let healthDiff = 0;

  while (modifiedArr.length != 0) {
    let newArr = modifiedArr.shift();
    let [command, damage] = newArr.split(` `);
    damage = Number(damage);
    switch (command) {
      case "potion":
        let addHealth = damage;
        let newHealth = health + addHealth > 100 ? 100 : health + addHealth;
        console.log(`You healed for ${newHealth - health} hp.`);
        health = newHealth;
        console.log(`Current health: ${health} hp.`);

        room++;
        break;
      case "chest":
        bitcoins += damage;
        room++;
        if (health > 0) {
          console.log(`You found ${damage} bitcoins.`);
        }
        break;
      default:
        health -= damage;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
          room++;
        } else {
          room++;
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${room}`);
        }
    }
  }
  if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}
muOnlineGame("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
