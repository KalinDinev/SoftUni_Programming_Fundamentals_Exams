function studentsScoring(input) {
  // First, we receive the number of students enrolled in the course – 5. The total count of the lectures is 25, and the additional bonus is 30. Then we calculate the bonus of the student with 12 attendances, which is 16.8. We continue calculating each of the student's bonuses. The one with 24 attendances has the highest bonus – 33.6 (34 rounded), so we print the appropriate message on the console.

  let studentsCount = Number(input.shift());
  let allLectures = Number(input.shift());
  let initialBonus = Number(input.shift());
  let maxAtt = 0;
  let maxBonus = 0;
  for (let i = 0; i < studentsCount; i++) {
      let attendances = input[i];
      let bonus = (attendances / allLectures) * (5 + initialBonus);
      if (bonus >= maxBonus) {
          maxBonus = bonus;
          maxAtt = attendances;
      }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAtt} lectures.`);

}
studentsScoring([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);
