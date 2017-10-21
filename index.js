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

function currentLine(array) {
var fixed;
var text = '';
  if (array != null)
  {
    fixed = "The line is currently: ";
    for (var i = 0; i < array.length; i++) {
      var v = i + 1;
      text = text + `${v}. ${array[i]}` ;
      if ((array.length - 1) != i) {
        text = text + ', '
      }
    }
    return fixed + text
  }
  else {
    text = "The line is currently empty.";
    return text
  }
}
