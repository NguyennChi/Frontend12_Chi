// ARTICLES_VIEWED
loadStorage = () => {
    return JSON.parse(localStorage.getItem("ARTICLES_VIEWED")) ;
}

saveStorage = (items) => {
    localStorage.setItem("ARTICLES_VIEWED", JSON.stringify(items));
}

listItems = () => {
    let items = loadStorage() ;
    if(items === null) items = [];  // 
    return items;
}


deleteItem = (id) => {
  let items = listItems(); 
  items = items.filter(item => item.id !== id);
  saveStorage(items);
  return items;
}

addItem = (id, title, thumb, link) => {
    let taskNew = {id: id, title: title, thumb: thumb, link:link};
   
    let items = listItems();
    items.push(taskNew);

    // Lưu item vào storgare
    saveStorage(items);

    return items;
}
// TRANG BÀI VIẾT YÊU THÍCH
loadStorageLove = () => {
    return JSON.parse(localStorage.getItem("ARTICLES_LOVE")) ;
}

saveStorageLove = (items) => {
    localStorage.setItem("ARTICLES_LOVE", JSON.stringify(items));
}

listItemsLove = () => {
    let items = loadStorageLove() ;
    if(items === null) items = [];  // 
    return items;
}


deleteItemLove = (id) => {
  let items = listItemsLove(); 
  items = items.filter(item => item.id !== id);
  saveStorageLove(items);
  return items;
}

addItemLove = (id, title, thumb, link, description, publish_date) => {

    let NewLove = {id: id, title: title, thumb: thumb, link:link, description: description, publish_date};
    let items = listItemsLove();
    items.push(NewLove);
    // Lưu item vào storgare
    saveStorageLove(items);

    return items;
}
notifi = (id)=>{
    let items = listItemsLove(); 
    items = items.filter(item => item.id !== id);
    return items;
}