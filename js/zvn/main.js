$(document).ready(function () {
    // Đổ dữ liệu ra category news
    showCategoryInMenu();
    // active menu
    activeMenu2();
    // Giá vàng
    showGold();

    // Giá coin
    showCoin();

    // Thời tiết
    // showWeather();

    // Đổ danh sách bài viết trong một category nào đó
    let categoryID = $.urlParam('id');
    if (categoryID !== null) {
        showArticleInCategory(categoryID);
        // đổ tiêu đề category
        showTitleArticleInCategory(categoryID);
    }  
    // đổ video
    showVideo();
    // 3 tin tức mới nhất
    showLatestArticle(3);

    // Đổ danh sách category và bài viết của category ngoài trang chủ
    showCategoryDetail();

    // // Hiển thị bài viết đã xem
    let data = listItems();
    showArticleViewed(data);

    // hiển thị category footer
    showCategoryFooter();

});

