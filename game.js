//Sets up the array of words that can be guessed. 
// var words = ['michael\xa0scott', 'jim\xa0halpert', 'dwight\xa0schrute', 'pam\xa0halpert', 'angela\xa0martin', 'andy\xa0bernard', 'toby\xa0flenderson', 'kevin\xa0malone', 'darryl\xa0philbin', 'erin\xa0hannon', 'phyllis\xa0vance', 'gabe\xa0lewis', 'meredith\xa0palmer', 'kelly\xa0kapoor', 'ryan\xa0howard', 'creed\xa0bratton', 'oscar\xa0martinez', 'stanley\xa0hudson', 'robert\xa0california', 'jan\xa0levinson', 'nelly\xa0burtram', 'holly\xa0flax', 'deangelo\xa0vikkers', 'jo\xa0bennett', 'charles\xa0miner', 'david\xa0wallace', 'roy\xa0anderson', 'pete\xa0miller', 'clark\xa0green', 'todd\xa0packer', 'karen\xa0filippelli'];
var words = ['michael', 'jim', 'dwight', 'pam', 'angela', 'andy', 'toby', 'kevin', 'darryl', 'erin', 'phyllis', 'gabe', 'meredith', 'kelly', 'ryan', 'creed', 'oscar', 'stanley', 'robert', 'jan', 'nelly', 'holly', 'deangelo', 'jo', 'charles', 'david', 'roy', 'pete', 'clark', 'todd', 'karen'];

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files. 
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}