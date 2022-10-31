function pirating(arr) {
  let dayOfPlunder = Number(arr.shift());
  let plunderPerDay = Number(arr.shift());
  let expectedPlunder = Number(arr.shift());
  let plunder = 0;

  for (let i = 1; i <= dayOfPlunder; i++) {
    plunder += plunderPerDay;
    if (i % 3 == 0) {
      plunder += 0.5 * plunderPerDay;
    }
    if (i % 5 == 0) {
      plunder -= 0.3 * plunder;
    }
  }
  
  if (plunder >= expectedPlunder) {
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
  } else {
    let perc = (plunder / expectedPlunder) * 100;
    console.log(`Collected only ${perc.toFixed(2)}% of the plunder.`);
  }
}
// pirating((["10",
// "20",
// "380"]))

console.log(`------------`);
pirating(["5", "40", "100"]);

function pirate(input) {
  input = input.map((el) => +el);

  let days = input.shift();
  let dailyPlunder = input.shift();
  let expectedTotalPlunder = input.shift();
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 === 0) {
      totalPlunder += 0.5 * dailyPlunder;
    }
    if (i % 5 === 0) {
      totalPlunder -= 0.3 * totalPlunder;
    }
  }

  if (totalPlunder >= expectedTotalPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let perc = (totalPlunder / expectedTotalPlunder) * 100;
    console.log(`Collected only ${perc.toFixed(2)}% of the plunder.`);
  }
}
