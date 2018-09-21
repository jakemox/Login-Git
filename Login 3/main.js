const regUsernames = ['Jake', 'Mateo', 'Lennart'];
const regPasswords = ['Moxon', 'Milic', 'Beumer'];

function newUserPass() {
    let userInput = document.getElementById('username');
    let username = userInput.value;

    let passInput = document.getElementById('password');
    let password = passInput.value;

    // regUsernames.push(username);
    // regPasswords.push(password);
    if (regUsernames.includes(username)) {
        if (regUsernames.indexOf(username) === regPasswords.indexOf(password)) {
            access.innerHTML = 'Access Granted';
        } else {
            access.innerHTML = 'Access Denied';
        }
    } else {
        access.innerHTML = 'Access Denied';
    }
    
    
        
}

    

document.addEventListener('DOMContentLoaded', function() {
    let loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', newUserPass);
})