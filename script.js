let enteredName = prompt("lütfen bir isim giriniz");
let username = document.getElementById("name");
username.innerHTML = enteredName  + "!";



function time() {
        let today = new Date();
        let today_date = document.getElementById("date");
    
        let hour = ("0" + today.getHours()).slice(-2);
        let minute = ("0" + today.getMinutes()).slice(-2);
        let second = ("0" + today.getSeconds()).slice(-2);
        let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba","Perşembe","Cuma","Cumartesi"];
        let day = days[today.getDay()];
        today_date.innerHTML = `${hour}:${minute}:${second} ${day}`
    }



setInterval(time, 1000)