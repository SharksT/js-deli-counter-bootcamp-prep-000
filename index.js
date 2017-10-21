var katzDeli = [];
var count = 1;
function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  var text = ("Welcome, " +  name + " You are number " + count + " in line.");
  count++;
}
