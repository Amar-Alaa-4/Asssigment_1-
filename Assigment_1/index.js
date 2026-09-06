//1-
let string_number = "123";
let total = Number(string_number) + 7;
console.log(total);

//2-
function checkvalue(varaible) {
  if (!varaible) {
    return "unacceptable";
  }
  return "acceptable";
}

//3-
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

//4-
function getEvenNumbers(array) {
  return array.filter(function (num) {
    return num % 2 === 0;
  });
}

console.log(getEvenNumbers([1, 2, 3, 4, 5]));

//5-
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log(mergeArrays(array1, array2));

//6-
function getDayName(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDayName(2));

//7-
function getLengths(array) {
  return array.map(function (str) {
    return str.length;
  });
}

console.log(getLengths(["a", "ab", "abc"]));

//8-
function check_the_division_of_number(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "divisible by both numbers 3,5";
  } else if (num % 3 === 0) {
    return "Divisible by 3 only";
  } else if (num % 5 === 0) {
    return "Divisible by 5 only";
  } else {
    return "Not divisible";
  }
}

console.log(check_the_division_of_number(15));

//9-
function sum_of_Area_ofsquare(num) {
  return num * num;
}

console.log(sum_of_Area_ofsquare(5));

//10-
function formating_data_person(person) {
  const { name, age } = person;
  return name + " is " + age + " years old";
}

const person = { name: 'islam_Fawazy', age: 30 };
console.log(formating_data_person(person));

//11
function sumAll(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

//12-
function delayedSuccess() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Success");
    }, 3000);
  });
}

delayedSuccess().then(function (message) {
  console.log(message);
});

//13-
function findLargest(arrayy) {
  let largest = arrayy[0];
  for (let i = 0; i < arrayy.length; i++) {
    if (arrayy[i] > largest) {
      largest = arrayy[i];
    }
  }
  return largest;
}
console.log(findLargest([1, 3, 7, 2, 4]));

//14-
function getKeys(obj) {
  return Object.keys(obj);
}

var data = { name: "Amar", age: 18 };
console.log(getKeys(data));

//15-
function splitWords(str) {
  return str.split(" ");
}

console.log(splitWords("The quick brown fox"));
