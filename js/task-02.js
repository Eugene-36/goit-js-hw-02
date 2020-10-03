const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
    // Write code in this line
   const quantityWords = message.split(' ').length;
   const totalPrice = quantityWords * pricePerWord;
   return totalPrice;
 }