// BÀI VIẾT ĐÃ XEM
funcDeleteTask = (id) => {
    let text = "DELETE!\nBạn chắc chắn muốn xoá công việc";
    if (confirm(text) == true) {
        let items = deleteItem(id);
        showItems(items);
    } 
}


funcSubmitForm = () => {
    let valueName   = elemInputName.value;
    let valueLevel  = elemInputLevel.value;
    let valueID     = elemInputID.value;
    let items       = [];
    
    if(valueID == ""){ // add
        items = addItem(valueName, valueLevel);
    }else{ // edit
        items = editItem(valueID, valueName, valueLevel);
    }
    // Load lại danh sách
    showItems(items);  
}

funcViewArticle = (id, title, thumb, link ) => {
    let items       = [];
    items = addItem(id, title, thumb, link);
    showArticleViewed(items);
}

// TRANG YÊU THÍCH

funcViewArticleLove = (id, title, thumb, link, description, publish_date ) => {
    let items       = [];
    items = addItemLove(id, title, thumb, link, description, publish_date);
    showArticleViewedLove(items);
}

funcDeleteArticleViewedLove= (id) => {
    let text = "DELETE!\nBạn chắc chắn muốn xoá bài viết này";
    if (confirm(text) == true) {
        let items = deleteItemLove(id);
        showArticleViewedLove(items);
    } 
}