// script.js

document.addEventListener("DOMContentLoaded", () => {
  // شبیه‌سازی بارگذاری (اختیاری)
  setTimeout(() => {
    // مخفی کردن لودینگ
    document.getElementById("loading").style.display = "none";
    // نمایش محتوای اصلی
    document.getElementById("content").style.display = "block";
  }, 2000); // 2 ثانیه تاخیر
});
