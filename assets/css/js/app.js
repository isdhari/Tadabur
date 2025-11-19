/* =============================
   إخفاء شاشة الدعاء عند الضغط
============================= */
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("dua-modal");
    const enterBtn = document.getElementById("enter-btn");

    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});

/* =============================
   عداد أذكار الصفحات (الصباح / المساء / الصلاة)
============================= */
function decrease(button) {
    let value = parseInt(button.innerText);

    if (value > 0) {
        value--;
        button.innerText = value;
    }

    if (value === 0) {
        button.classList.add("finished");
    }
}

/* =============================
   عداد صفحة counter.html
============================= */
let counter = 0;

function increase() {
    counter++;
    document.getElementById("counter-number").innerText = counter;
}

function decreaseCounter() {
    if (counter > 0) counter--;
    document.getElementById("counter-number").innerText = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter-number").innerText = 0;
}
