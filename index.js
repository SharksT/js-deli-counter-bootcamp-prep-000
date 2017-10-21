var katzDeli = [];
var count = 1;
function takeANumber(katzDeli1,name) {
  katzDeli1.push(name);
  var text = ("Welcome, " +  name + ". You are number " + count + " in line.");
  count++;
  return text;
}
