function arabicToRoman(num) {
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
    let result = '';
  
    for (let i = 0; i < arabic.length; i++) {
      while (num >= arabic[i]) {
        result += roman[i];
        num -= arabic[i];
      }
    }
  
    return result;
  }

  console.log(arabicToRoman(2023))