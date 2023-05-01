const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone_number')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')



email.addEventListener("input", function (event) {
    if (email.validity.patternMismatch) {
      email.setCustomValidity("Please, enter a valid email! (example: 'you@mail.com')");
    } else {
      email.setCustomValidity("");
    }
});

phoneNumber.addEventListener("input", function (event) {
    if (phoneNumber.validity.patternMismatch) {
      phoneNumber.setCustomValidity("Please, enter a 10 digit number!");
    } else {
      phoneNumber.setCustomValidity("");
    }
});

password.addEventListener("input", function (event) {
    if (password.validity.patternMismatch) {
        const cap = /[A-Z]/
        const dig = /[0-9]/
        const low = /[a-z]/
        const pS = /[ -\/:-@\[-\`{-~]/
        let message = ''

        if (cap.test(password.value)) {
            message += ''
        } else {
            message += 'Add at least 1 capital letter'
            message += '\n'
        }

        if (dig.test(password.value)) {
            message += ''
        } else {
            message += 'Add at least 1 digit'
            message += '\n'
        }

        if (low.test(password.value)) {
            message += ''
        } else {
            message += 'Add at least 1 lower letter'
            message += '\n'
        }

        if (pS.test(password.value)) {
            message += ''
        } else {
            message += 'Add at least 1 special symbol'
            message += '\n'
        }

        if (password.value.length < 8) {
            message += 'Enter at least 8 symbols'
            message += '\n'
        }

        if (password.value.length > 64) {
            message += 'Password must not contain more than 64 symbols'
            message += '\n'
        }


        password.setCustomValidity(message)
        
    } else {
        password.setCustomValidity('')
    }
});

confirmPassword.addEventListener('input', function(e) {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity('Passwords do not match')
    } else {
        confirmPassword.setCustomValidity('')
    }
})