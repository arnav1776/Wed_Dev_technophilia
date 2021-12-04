var SP = 199;
var LP = 799;

var DP = ((LP - SP) / LP) * 100;
console.log("Discount Percentage: " + DP);

displayDiscount = Math.round(DP);

console.log(displayDiscount + "% off");