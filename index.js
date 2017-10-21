var katzDeli = [];
var count = 1;
function takeANumber(array,name) {
  array.push(name);
  var a = array.lenght;
  var text = ("Welcome, " +  name + ". You are number " + array.lenght + " in line.");
  count++;
  return text;
}
