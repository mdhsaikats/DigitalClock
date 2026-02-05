function updateTime() {
    const el = document.getElementById("time");
    if (!el) return;
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    el.innerHTML = `${hh}:${mm}:${ss}`;
}

updateTime();
setInterval(updateTime, 1000);