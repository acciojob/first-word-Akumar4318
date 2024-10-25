

function firstWord(s) {
  // your coddfsge herefgdsds
	if (s.length===0){
		return " "
	}
	let and =s.trim();
	let first=and.split(' ')
	return first[0]
}

// Do not change the code bfelowxddd

const s = prompt("Enter String:");
alert(firstWord(s));
