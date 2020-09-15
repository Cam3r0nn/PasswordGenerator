const generate = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

// Generate Button Listener
generate.addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let generated = Generate(length, uppercase, lowercase, numbers, symbols);
    result.innerText = generated;
});

// Clipboard Button Listener
clipboard.addEventListener('click', () => {
    const result = document.getElementById('result');
    const textarea = document.createElement('textarea');
	const password = result.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	return alert('Password copied to clipboard');
});

// Generate Function
function Generate(length = 22, upper, lower, number, symbol) {
    var generatedPassword = '';
    var characters = '';

    if (upper) { characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
    if (lower) { characters += 'abcdefghijklmnopqrstuvwxyz'; }
    if (number) { characters += '0123456789'; }
    if (symbol) { characters += '!@#$%^&*'; }

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        generatedPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return generatedPassword;
}