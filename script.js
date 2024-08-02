document.addEventListener('DOMContentLoaded', () => {
    const passwordElement = document.getElementById('password');
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');
    const lengthInput = document.getElementById('length');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const refreshButton = document.getElementById('refresh-btn');

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    function generatePassword() {
        let length = parseInt(lengthInput.value);
        let chars = '';
        if (lowercaseCheckbox.checked) chars += lowercaseChars;
        if (uppercaseCheckbox.checked) chars += uppercaseChars;
        if (numbersCheckbox.checked) chars += numberChars;
        if (symbolsCheckbox.checked) chars += symbolChars;

        if (chars === '') {
            passwordElement.value = 'Please select at least one option';
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        passwordElement.value = password;
    }

    generateButton.addEventListener('click', generatePassword);
    refreshButton.addEventListener('click', generatePassword);

    copyButton.addEventListener('click', () => {
        passwordElement.select();
        document.execCommand('copy');
    });

    // Generate initial password
    generatePassword();
});
