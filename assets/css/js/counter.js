// الهدف الافتراضي
let counterTarget = 33;

// العدّ الحالي
let counterValue = 0;

// تاريخ الإنجازات (اختياري)
let counterHistory = [];

// اختيار هدف جاهز (33 أو 100)
function setTarget(value) {
    counterTarget = value;
    updateCounterUI();
}

// اختيار هدف من المستخدم
function setCustomTarget(input) {
    const v = parseInt(input.value);
    counterTarget = Math.max(1, v || 1);
    updateCounterUI();
}

// زيادة العد
function incrementCounter() {
    counterValue++;

    // حفظ الإنجاز في التاريخ
    if (counterValue === counterTarget) {
        counterHistory.push({
            count: counterValue,
            time: new Date()
        });
    }

    updateCounterUI();
}

// نقص العد
function decrementCounter() {
    if (counterValue > 0) counterValue--;
    updateCounterUI();
}

// إعادة التصفير
function resetAzkarCounter() {
    if (counterValue === counterTarget) {
        counterHistory.push({
            count: counterValue,
            time: new Date()
        });
    }

    counterValue = 0;
    updateCounterUI();
}

// تحديث واجهة العداد
function updateCounterUI() {
    const number = document.getElementById("counter-number");
    const targetSpan = document.getElementById("counter-target");
    const remainingSpan = document.getElementById("counter-remaining");
    const progressCircle = document.getElementById("progress-circle");

    if (number) number.innerText = counterValue;

    if (targetSpan) targetSpan.innerText = counterTarget;

    if (remainingSpan)
        remainingSpan.innerText = Math.max(0, counterTarget - counterValue);

    if (progressCircle) {
        const radius = 120;
        const circumference = 2 * Math.PI * radius;
        const progress = Math.min((counterValue / counterTarget) * 100, 100);

        progressCircle.style.strokeDasharray = `${circumference}`;
        progressCircle.style.strokeDashoffset =
            `${circumference * (1 - progress / 100)}`;
    }
}
