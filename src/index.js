module.exports = function check(str, bracketsConfig) {
  let someStr = ' ';
  
  while (str.length) {
    for (let bracket of bracketsConfig) {
      const configStr = bracket.join('');
      str = str.replace(configStr, '');
    }
    
    if (someStr === str) break;
    
    someStr = str;
  }
  
  return str.length === 0;
}


