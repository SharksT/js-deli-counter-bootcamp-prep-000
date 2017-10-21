var katzDeli = [];
function takeANumber(array,name) {
  array.push(name);
  var text = ("Welcome, " +  name + ". You are number " + array.lenght + " in line.");
  return text;
}

function nowServing(array) {

  if (array != null ) {
    var text1 = `Currently serving ` + array[0] + ".";
    return text1;
    array.shift();
  }
  else {
   var text = "There is nobody waiting to be served!";
   return text;
  }
}

function currentLine(array) {
var text;
  if (array != null)
  {
    for (var i = 0; i < array.length; i++) {
      console.log("The line is currently: " i+1 ". " + array[i]);
    }
  }
  else {
    console.log("The line is currently empty.");
  }
}
