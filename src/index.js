module.exports = function check(str, bracketsConfig) {
  
  let arrayBrackets = [];

  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] == bracketsConfig[j][0]) {
              if (
                  arrayBrackets[arrayBrackets.length - 1] == bracketsConfig[j][0] &&
                  bracketsConfig[j][0] == bracketsConfig[j][1]
              ) {
                  arrayBrackets.pop();
              } else {
                  arrayBrackets.push(str[i]);
              }
          } else if (str[i] == bracketsConfig[j][1]) {
              if (!arrayBrackets.length) {
                  return false;
              }

              if (arrayBrackets[arrayBrackets.length - 1] == bracketsConfig[j][0]) {
                  arrayBrackets.pop();
              }
          }
      }
  }

  return arrayBrackets.length ? false : true;

}
