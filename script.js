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
