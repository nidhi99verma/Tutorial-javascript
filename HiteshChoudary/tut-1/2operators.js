var listingPrice = 799;
var sellingPrice = 199;

var discountPrice = ((listingPrice - sellingPrice)/listingPrice * 100);
discountPriceRoundOff = Math.round(discountPrice)

console.log(`Disconut Price Percentage: ${discountPriceRoundOff}% OFF`);
console.log(typeof(discountPriceRoundOff));