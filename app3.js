function func(num) {
  num = String(num)
  let obj = {
    1: 'Один', 2: 'Два', 3:'Три', 4:'Четыре', 5:'Пять', 6:'Шесть', 7:'Семь', 8:'Восемь', 9:'Девять', 10:'Десять',
     11:'Одиннадцать', 12:'Двенадцать', 13:'Тринадцать', 14:'Четырнадцать', 15:'Пятнадцать',
      16:'Шестнадцать', 17:'Семнадцать', 18:'Восемнадцать', 19:'Девятнадцать', 20:'Дватцать', 30: 'Тридцать', 40: 'Сорок', 50: 'Пятьдесят',
      60: 'Шестьдесят', 70: 'Семьдесят', 80: 'Восемьдесят', 90: 'Девяноста', 100: 'Сто', 200: 'Двести', 300: 'Триста',
       400: 'Четыреста', 500: 'Пятьстот', 600: 'Шестьсот', 700: 'Семьсот', 800: 'Восемьсот', 900: 'Девятьсот',
  }
  let result = '';
  if (num > 0 && num <= 20 || num === 30 || num === 40 || num === 50 || num === 60 || num === 70 || num === 80 || num === 90 || num === 100
    || num === 200 || num === 300 || num === 400 || num === 500 || num === 600 || num === 700 || num === 800 || num === 900) {
    console.log(obj[num])
    
    
  } if (num > 20 && num.length == 2) {
    result += obj[num[0] + 0] + ' ' + (obj[num[1]] || '')
    result = result.slice(0, 1) + result.slice(1).toLowerCase()
    console.log(result)
  } if (num.length == 3 && num[1] == 1) {
    result += obj[num[0] + 0 + 0] + ' ' + obj[num[1] + num[2]]
    result = result.slice(0, 1) + result.slice(1).toLowerCase()
    console.log(result)
  } if (num.length == 3 && num[1] != 1) {
    result += obj[num[0] + 0 + 0] + ' ' + (obj[num[1] + 0] || '') + ' ' + (obj[num[2]] || '')
    result = result.slice(0, 1) + result.slice(1).toLowerCase()
    console.log(result)
  }
  
}

func(699)