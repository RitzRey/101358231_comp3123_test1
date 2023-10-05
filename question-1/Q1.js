// 101358231, Ritchel Rey Etchorre, LabTest1 Q1

// const mixedArray that contains mixed values such as PIZZA, 10, true, 25, false, and Wings in an array
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// lowerCaseWords arrow function
const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    const lowercaseWords = arr
      .filter(item => typeof item === 'string')
      .map(word => word.toLowerCase());

    if (lowercaseWords.length > 0) {
      resolve(lowercaseWords);
    } else {
      reject(new Error('There are no stringss in the array'));
    }
  });
};

// outputs values in mixedArray to console
console.log(mixedArray)

// calls lowerCaseWords arrow function
lowerCaseWords(mixedArray)
  .then(lowercaseWords => {
    console.log(lowercaseWords);
  })
  .catch(e => {
    console.error('Error:', e.msg);
  });
