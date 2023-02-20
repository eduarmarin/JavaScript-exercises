const findTheOldest = function(people) {

    for (let i = 0; i < 3; i++) {
        if ("yearOfDeath" in people[i] == false) {
            yearOfDeath = new Date().getFullYear(); // return current year using Date()
            people[i].yearOfDeath = yearOfDeath;
         }
    }

    console.log('year of death ---------------'+people[0]);

    const oldestCharacters = people.sort(function(a,b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) {
          return -1;
        } else {
          return 1;
        }
      });
      return oldestCharacters[0];
        console.log(oldestCharacters);
};

// Do not edit below this line
module.exports = findTheOldest;
