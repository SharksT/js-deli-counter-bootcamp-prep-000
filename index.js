var katzDeli = [];
var count = 1;
function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  console.log("Welcome, " +  name + " You are number " + count + " in line.");
  count++;
}
