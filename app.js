const downCounter = () => {
    const countTime = new Date("Feb 28, 2022 16:30:00").getTime();
    const now = new Date().getTime();

    const gap = countTime - now;

    if(gap <1000) {
        document.getElementById("counter").innerHTML = "<div>Dasun</div>";
    }

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);


    document.querySelector('.day').innerText = textDay < 10 ? '0' + textDay: textDay;
    document.querySelector('.hour').innerText = textHour < 10 ? '0' + textHour: textHour;
    document.querySelector('.minute').innerText = textMinute < 10 ? '0' + textMinute: textMinute;
    document.querySelector('.second').innerText = textSecond < 10 ? '0' + textSecond: textSecond;

}

setInterval(downCounter, 1000)