var katzDeli = [];
function takeANumber(array,name) {
  array.push(name);
  var text = ("Welcome, " +  name + ". You are number " + array.lenght + " in line.");
  return text;
}

function nowServing(array) {

if (array[0] != null ) {
  return array[0];
  delete array[0];
}
else {
 var text = "There is nobody waiting to be served!";
 return text;
}


}
