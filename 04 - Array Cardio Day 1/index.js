// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      let inventor = inventors.filter(inventor => {
          if (inventor.year >= 1500 && inventor.year < 1600) {
              return true;
          }
      });
      console.table(inventor);
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names

      let fullName = inventors.map(inventor => {    // 'inventor' is the variable that hold one value of 'inventors' 
          return (inventor.first + ' ' + inventor.last);
      })
      console.table(fullName);
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest

      let sortByBday = inventors.sort(function (firstInventor, secondInventor) {
        //   if ((firstInventor.passed - firstInventor.year) - (secondInventor.passed - secondInventor.year)) {
        //       return +1;
        //   }else {
        //       return -1;
        //   }

        if (firstInventor.year > secondInventor.year) {
            return +1;
        }else {
            return -1;
        }


      })

      console.table(sortByBday);
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      let sumAllYears = inventors.reduce((total,inventor) => {
          return total + (inventor.passed - inventor.year);
      },0);
      console.log(sumAllYears);
      // 5. Sort the inventors by years lived

      let sortByAge = inventors.sort(function (firstInventor, secondInventor) {
          if ((firstInventor.passed - firstInventor.year) > (secondInventor.passed - secondInventor.year)) {
              return -1;
          }else {
              return +1;
          }
        });

        console.table(sortByAge);
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//       let catagory = document.querySelector('.mw-category');
//       let links = Array.from(catagory.querySelectorAll('a'));
//       let linkContent = links.map(link => {
//                              return link.textContent;
//                             });
// let containDe = linkContent.filter(streetName => streetName.includes('de'));

// console.table(containDe);
  
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      let sortByLname = people.sort( function (firstOne, nextOne) {
          let [aLast, aFirst] = firstOne.split(', ');
          let [bLast, bFirst] = nextOne.split(', ');

          //console.log(first, last);
          //console.table(firstOne);
          //console.table(nextOne);
          if (aLast > bLast) {
              return +1;
          }else {
              return -1;
          }
      })

      console.table(sortByLname);
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

      let numberOfVehicles = data.reduce(function (obj,item) {
          if (!obj[item]){
              obj[item] = 0;
          }
          obj[item]++
          return obj;
      },{})

      console.table(numberOfVehicles);