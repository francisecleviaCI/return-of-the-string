/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(string){
  return string + '!';
}
//let you = yell()


function getFirstCharacter(name){
  return name[0];
}


function getLastCharacter(name){
  return name.charAt(name.length-1);
}

function getOneCharacter(name, number){
  return name[number];
}

function getTwoCharacters(name, number1, number2){
  return name[number1] + name[number2];
}

function makeCapitalized(newyork){
  return newyork.toUpperCase();
}

function yellLouder(whatthehell){
  return whatthehell.toUpperCase() + '!!!';
}

function getInitials(Name){
  return Name[0] + '.' + Name[Name.indexOf(' ')+1] + '.';
}




/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
