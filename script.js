// عرض الشرائح
const images = document.querySelectorAll('.slideshow-image');
let currentImageIndex = 0;

function changeImage() {
    // إخفاء الصورة الحالية
    images[currentImageIndex].classList.remove('active');

    // الانتقال إلى الصورة التالية
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // إظهار الصورة الجديدة
    images[currentImageIndex].classList.add('active');
}

// تغيير الصورة كل 3 ثوانٍ
setInterval(changeImage, 3000);

// منع النقر بزر الفأرة الأيمن
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('حقوق النشر محفوظة. لا يُسمح بنسخ المحتوى.');
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        alert('تم تعطيل هذه الاختصارات لأسباب أمنية.');
    }
});
