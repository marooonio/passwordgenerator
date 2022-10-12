function generatePassword() {
    const result = parseInt(Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));

    document.getElementById('generatedPasswordMail').innerHTML+="Zp@"+result+"!#";
    document.getElementById('generatedPasswordBaselinker').innerHTML+="ZpBL"+result+"!#";
    document.getElementById('generatedPasswordPresta').innerHTML+="ZpPS"+result+"!#";
}