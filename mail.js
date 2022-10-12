function generate() {
    const imie = document.getElementById('name').value;
    const nazwisko = document.getElementById('surname').value;
    const result = parseInt(Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));

    const mail = document.getElementById('generatedMail');
    const pwdMail = document.getElementById('generatedPasswordMail');
    const pwdBL = document.getElementById('generatedPasswordBaselinker');
    const pwdPS = document.getElementById('generatedPasswordPresta');

    if ((imie === "") || (nazwisko==="")) {
        alert("Nie podałeś imienia lub nazwiska!");
    } else if ((document.getElementById('mail').checked) && (document.getElementById('BL').checked) && (document.getElementById('PS').checked)){
        mail.innerHTML+=imie+"."+nazwisko+"@zielony-parapet.pl";
        pwdMail.innerHTML+="Zp@"+result+"!#";
        pwdBL.innerHTML+="ZpBL"+result+"!#";
        pwdPS.innerHTML+="ZpPS"+result+"!#"; 
    } else if ((document.getElementById('mail').checked) && (document.getElementById('BL').checked)){
        mail.innerHTML+=imie+"."+nazwisko+"@zielony-parapet.pl";
        pwdMail.innerHTML+="Zp@"+result+"!#";
        pwdBL.innerHTML+="ZpBL"+result+"!#";
    } else if (document.getElementById('mail').checked) {
        mail.innerHTML+=imie+"."+nazwisko+"@zielony-parapet.pl";
        pwdMail.innerHTML+="Zp@"+result+"!#";
    } else if (document.getElementById('BL').checked){
        pwdBL.innerHTML+="ZpBL"+result+"!#";
    } else if (document.getElementById('PS').checked){
        pwdPS.innerHTML+="ZpPS"+result+"!#";
    }
}
