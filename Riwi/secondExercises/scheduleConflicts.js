// Define every hour between each meet
const reuniones = [
  { id: 1, startHours: "09:00", endHours: "10:00" },
  { id: 2, startHours: "09:30", endHours: "11:00" },
  { id: 3, startHours: "11:00", endHours: "12:00" },
];

// Define the boolean value
let conflicts = false;

// We use .some because we want to verify if at least a id of the list get the condition
reuniones.some((actual, i) =>

// A method in this code is used so that the objects that have the keys and values ​​of the meetings take the times of the first meeting and compare it with the next one.
  reuniones.slice(i + 1).some((next) => {
    if (
      actual.endHours > next.startHours &&
      actual.startHours < next.endHours
    ) {
      console.log(`
        conflicts between every meet ${actual.id} (${actual.startHours}-${actual.endHours}) and Meet ${next.id} (${next.startHours}-${next.endHours})
      `);
      conflicts = true;
      return true;
    }
    return false;
  })
);

// Show he conflicts
console.log("Some conflicts?:", conflicts);