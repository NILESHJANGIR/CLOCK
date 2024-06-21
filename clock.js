
// var second=0;
// var minute=0;
// var hour=0;
// var d=new Date();

// setInterval(
//     function () {
//         d=new Date();
//         second=d.getSeconds() * 6;
//         minute=d.getMinutes()*6;
//         hour=d.getHours()*30+Math.round(minute/12);
//         document.getElementById("sec").style.transform="rotate("+second+"deg)";
//         document.getElementById("hour").style.transform="rotate("+hour+"deg)";
//         document.getElementById("min").style.transform="rotate("+minute+"deg)";

//     },1000
// )

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
