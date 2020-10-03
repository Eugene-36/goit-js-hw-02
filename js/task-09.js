
function formatString (string, maxLength = 40) {
    // Write code under this line
    
    const result = string.length < maxLength ? string : string.slice(0, maxLength )  + "...";
   return result;
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
   'Vestibulum facilisis, purus nec pulvinar...'

  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
   'Vestibulum facilisis, purus ne...'



// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., 
// после чего возвращает укороченную версию

    // if(string <= maxLength){
    //     return string;
    // }else if(string > maxLength){
    //     string.slice();
    // }
    // return string;