// BÀI VIẾT ĐÃ XEM
funcDeleteArticleViewed = (id) => {
    let text = "DELETE!\nBạn chắc chắn muốn xoá bài viết này";
    if (confirm(text) == true) {
        let items = deleteItem(id);
        location.reload()
        showArticleViewed(items);
    } 

}


// funcSubmitForm = () => {
//     let valueName   = elemInputName.value;
//     let valueLevel  = elemInputLevel.value;
//     let valueID     = elemInputID.value;
//     let items       = [];
    
//     if(valueID == ""){ // add
//         items = addItem(valueName, valueLevel);
//     }else{ // edit
//         items = editItem(valueID, valueName, valueLevel);
//     }
//     // Load lại danh sách
//     showItems(items);  
// }

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
        location.reload()
        showArticleViewedLove(items);
    } 
}

// funcSearch=()=>{
    // document.getElementById("search").value = "";
    // console.log(value);
    var input = document.getElementById("search");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        let searchValue = $(this).val();

        if(searchValue.length > 2){
            window.location.href = "http://127.0.0.1:5500/search.html?key=" + searchValue
            console.log('vao');
        }else{
            alert("Nhap vao gia tri muon tim")
        }
      }
    });




let stateL   = "off";
funcIconChange=(id)=>{
let elemLight = document.getElementById(id);
  if (stateL ==  "off") {
    // elemLight.classList.remove('far');
console.log(stateL);
    stateL="on";
  } else {
    console.log(stateL);
    stateL = "off"
  }
    
}