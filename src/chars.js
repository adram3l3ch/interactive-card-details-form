const numbers = ["!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphabets = ["!"];
const alphanumerics = [...numbers];

for (let i = 65; i < 91; i++) {
	alphabets.push(String.fromCharCode(i));
	alphanumerics.push(String.fromCharCode(i));
}

export { numbers, alphabets, alphanumerics };
