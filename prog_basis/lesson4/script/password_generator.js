function write(text) {
    document.getElementById("password").innerHTML = text;
}

function generatePassword() {
    let passwordLength = document.getElementById('passwordLength').value
    if (passwordLength === "") {
        write('Вы не ввели длину пароля');
    } else {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 1; i <= passwordLength; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        document.getElementById('password').innerHTML = `пароль: ${pass}`;
    }
}