var codetalkNames = [];

function resetNames (){
	codetalkNames = ['Bernice', 'Elliette', 'Mirna', 'Erinn', 'Aimee', 'Yadira', 'Jessica', 'Janene', 'Denise'];
}

function namePicker(){
	var namePick = codetalkNames.splice(Math.floor(Math.random() * codetalkNames.length), 1)
		// splice this from codetalkNames array - taking 1 away
		// rounding down, multiplying a random whole number, times the length of the array, spliced by 1
}