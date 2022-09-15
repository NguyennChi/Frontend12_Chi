// BÀI VIẾT ĐÃ XEM
funcDeleteArticleViewed = (id) => {
    let text = "DELETE!\nBạn chắc chắn muốn xoá bài viết này";
    if (confirm(text) == true) {
        let data = deleteItem(id);
        location.reload()
        showArticleViewed(data);
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
    
// }
// funcNotifi = (id) =>{
//     items = addItemLove(id);
//     console.log(items);
//     // $(".pos-demo").notify(
//     //     "I'm to the right of this box", 
//     //     { position:"right" }
//     //   );
//     // let elemfa = document.getElementById(id);
//     // if (stateL ==  "off") {
//     //     elemfa.src = "./image/turn_on.jpg".notify(
//     //         "I'm to the right of this box", 
//     //         { position:"right" }
//     //       );;
//     //     stateL="on";
//     // } else {
//     //     elemfa.src = "./image/turn_off.jpg";
//     //     stateL = "off"
//     // }
          
//   }