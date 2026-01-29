$(document).ready(function() {
    // 簡單的 Tab 切換功能
    $('.day-btn').click(function() {
        // 移除所有 active 狀態
        $('.day-btn').removeClass('active');
        $('.day-card').removeClass('active');

        // 為當前點擊的按鈕添加 active 狀態
        $(this).addClass('active');

        // 獲取 target ID 並顯示對應的內容
        const targetId = $(this).data('day');
        $('#' + targetId).addClass('active');

        // 平滑滾動到內容區域
        $('html, body').animate({
            scrollTop: $('.schedule-content').offset().top - 100
        }, 500);
    });

    // 點擊地圖時的小特效 (可選)
    $('.main-map').click(function() {
        // 簡單的放大縮小效果
        $(this).toggleClass('zoomed');
    });
});
