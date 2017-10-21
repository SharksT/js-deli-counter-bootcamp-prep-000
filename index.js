var katzDeli = [];
function takeANumber(array,name) {
  array.push(name);
  var text = ("Welcome, " +  name + ". You are number " + array.lenght + " in line.");
  return text;
}

function nowServing(array) {

if (array[0] != null ) {
  var text1 = `Currently serving ` + array[0] + ".";
  return text1;
  array.shift();
}
else {
 var text = "There is nobody waiting to be served!";
 return text;
    }
}
