setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    Hourrotation = 30*htime + mtime/2;
    Minutesrotation = 6*mtime;
    Secondrotation = 6*stime;

    hour.style.transform = `rotate(${Hourrotation}deg)`;
    minute.style.transform = `rotate(${Minutesrotation}deg)`;
    second.style.transform = `rotate(${Secondrotation}deg)`;
}, 1000);