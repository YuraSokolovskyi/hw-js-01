function isLoginValid(login){
    return login.length >= 4 && login.length <= 16
}

function isLoginUnique(allLogins, login){
    return allLogins.includes(login)
}

function addLogin(allLogins, login){
    if (!isLoginValid(login)) return 'Помилка! Логін повинен бути від 4 до 16 символів'
    if (isLoginUnique(allLogins, login)) return 'Такий логін уже використовується!'

    allLogins.push(login)
    return 'Логін успішно доданий!'
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'