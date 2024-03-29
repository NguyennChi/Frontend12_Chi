// Đổ dữ liệu ra category news
showCategoryInMenu = () => {
    
    $.getJSON( API_PREFIX + "categories_news", function( data ) {
        let xhtml = '';
        $.each( data, function( key, val ) {
            xhtml +=  `<li><a href="catagory.html?id=${val.id}">${val.name}</a></li>`

        });
        elmAreaCategoryNews.html(xhtml);
    });
}

// Giá vàng
showGold = () => {
    $.getJSON( API_PREFIX + "get-gold", function( data ) {
        let xhtml = '';
        $.each( data, function( key, val ) {
            xhtml += `<div class="area-gold-item widget-content">
                    <p>${val.type}</p>
                    Mua: <span class="buy">${val.buy}.000đ</span>, Bán <span class="sell">${val.sell}.000đ</span>
                </div>`;
        }); 
        elmAreaGold.after(xhtml);
    });
}
    
// Giá coin
showCoin = () => {
    $.getJSON( API_PREFIX + "get-coin", function( data ) {
        let xhtml = '';
        $.each( data, function( key, val ) {
            val.price = val.price.toLocaleString(); 
            val.percent_change_24h = val.percent_change_24h.toFixed(1); 
            let classPrice = (val.percent_change_24h > 0) ? 'green' : 'red';
            xhtml += `<div class="area-coin-item widget-content"> 
                    <p>${val.name}</p>
                    Price: <span class="price">${val.price}</span>, Percent 24h <span class="sell ${classPrice}">${val.percent_change_24h}%</span>
                </div>`;
        }); 
        elmAreaCoin.after(xhtml);
    });
}  
// thời tiết
// showWeather = () => {
//     $.getJSON( "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ho%20Chi%20Minh%20City?unitGroup=metric&key=GVPYC2VZ6GS4ZN44FWRCPD53V&contentType=json", function( data ) {
//         let xhtml = '';
//         console.log(data);
//         $.each( data.days, function( key,val ) {
//             console.log(val);
           

//         // xhtml += `<div class="widget-content">
//         //             <table>
//         //                 <th>
//         //                     <td>${val.datetime}</td>
//         //                     <td>:</td>
//         //                     <td>bcgvbb</td>
//         //                 </th>
//         //             </table>
//         //         </div>`;
//         }); 
//         elmAreaWeather.after(xhtml)
//     });
// }

// đổ bài viết trong category
showArticleInCategory = (categoryID) => {
    // let categoryID = $.urlParam('id'); 
    let xhtml = '';
    if(categoryID !== null) {
        // Đổ dữ liệu ra category news
        $.getJSON(API_PREFIX + `categories_news/${categoryID}/articles?offset=0&limit=10&sort_by=id&sort_dir=desc`, function(data) {
            $.each( data, function( key, val ) {  
                var dateFormat = val.publish_date
                let changedate = moment(dateFormat).format('DD-MM-YYYY');
                    xhtml += `         <div class="col-12 col-md-6 ">
                                            <!-- Single Blog Post -->
                                            <div class="single-blog-post wow fadeInUpBig fixContentHeight" data-wow-delay="0.2s">
                                                <!-- Post Thumbnail -->
                                                <div class="post-thumbnail">
                                                    <img class="fixImgHeight" src="${val.thumb}" alt="${val.link}">
                                                </div>
                                                <!-- Post Content -->
                                                <div class="post-content">
                                                <a href="${val.link}" target="_blank" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" class="post-title mb-2"><h5>${val.title}</h5></a>
                                                    <p>${val.description}</p>
                                                    <p class="post-date">
                                                    <a><i class="pad fal fa-clock"></i></a>
                                                    ${changedate}</a>
                                                    <a onClick="funcViewArticleLove('${val.id}', '${val.title}', '${val.thumb}', '${val.link}', '${val.description}','${val.publish_date}')"><i class=" far fa-heart"></i></a></p>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
                                    
            });
            elmAreaListArticle.html(xhtml);
        });
    }

}
    // đổ tiêu đề category

    showTitleArticleInCategory = (categoryID) => {
    // let categoryID = $.urlParam('id'); 
    
    if(categoryID !== null) {
        // Đổ dữ liệu ra category news
        $.getJSON(API_PREFIX + `categories_news/${categoryID}/articles?offset=0&limit=10&sort_by=id&sort_dir=desc`, function(data) {
            let xhtml = '';
            xhtml += `<li class="title">${(data[0].category.name).toUpperCase()}</li>`
            elmAreaTitleListArticle.html(xhtml);
        });
    }

    }
// Đổ danh sách bài viết mới nhất
showLatestArticle = (total) => {
    let xhtml = '';
    // Đổ dữ liệu ra category news
    $.getJSON( API_PREFIX + `articles?offset=0&limit=${total}&sort_by=id&sort_dir=desc`, function( data ) {
        $.each( data, function( key, val ) { 
            var dateFormat = val.publish_date
            let changedate = moment(dateFormat).format('DD-MM-YYYY');
                xhtml += `<div class="col-12 col-md-6 col-lg-4">
                                <div class="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.2s">
                                    <!-- Post Thumbnail -->
                                    <div class="post-thumbnail">
                                        <img class ="fixImgHeight" src="${val.thumb}" alt="${val.link}">
                                        <!-- Post Content -->
                                        <div class="post-content d-flex align-items-center justify-content-between">
                                            <!-- Catagory -->
                                            <div class="post-tag"><a href="catagory.html?id=${val.category.id}">${val.category.name}</a></div>
                                            <!-- Headline -->
                                            <a href="${val.link}" target="_blank" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" class="headline"><h5>${val.title}</h5></a>
                                            <!-- Post Meta -->
                                            <div class="post-meta">
                                                <p class="colorDate">
                                                <a class="post-date"><i class="fal fa-clock"></i>  ${changedate}</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        });
        elmAreaLatestArticle.html(xhtml);
    });
} 
// đổi ngày
   

// Đổ danh sách category và bài viết của category ngoài trang chủ
showCategoryDetail = () => {
    $.each( arrCategoryInHome, function( key, value ) {
        let xhtml = '';
        $.getJSON( API_PREFIX + `categories_news/${value}/articles?offset=0&limit=4&sort_by=id&sort_dir=desc`, function( data ) { 
            xhtml = `<div class="title fix">
                        <h5>${(data[0].category.name).toUpperCase()}</h5>
                    </div>`
            $.each( data, function( key, val ) {
                var dateFormat = val.publish_date
                let changedate = moment(dateFormat).format('DD-MM-YYYY');
                    xhtml += `  <div class=" single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
                                    <!-- Post Thumbnail -->
                                    <div class="post-thumbnail">
                                        <img src="${val.thumb}" alt="${val.link}">
                                    </div>
                                    <!-- Post Content -->
                                    <div class="post-content-fix">
                                        <a href="${val.link}" target="_blank" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" class="post-title mb-2"><h5>${val.title}</h5></a>
                                        <p>${val.description}</p>
                                        <p >
                                        <a class="post-date"><i class="pad fal fa-clock"></i>${changedate}</a>
                                        <a onClick="funcViewArticleLove('${val.id}', '${val.title}', '${val.thumb}', '${val.link}', '${val.description}','${val.publish_date}')">
                                        <span onClick="funcIconChange(${val.id})"><i class="far fa-heart"></i></span> </a>
                                        </p>      
                                        </div>
                                    </div>
                                </div>`
            });
            elmAreaLeftContent.after(xhtml);
        });
        
    });
}

// Đổ danh sách bài viết đã xem
showArticleViewed = (data) => {
    // Đổ dữ liệu ra category news
    // elmAreaArticleViewed.nextAll('div').remove();
    let xhtml = '';
    $.each( data, function( key, val ) {
        xhtml += `<div class="single-blog-post wow fadeInUpBig fixHeightOldPage" data-wow-delay="0.2s">
                    <!-- Post Thumbnail -->
                    <div class="post-thumbnail">
                        <img src="${val.thumb}" alt="${val.link}">
                    </div>
                    <!-- Post Content -->
                    <div class="fixContentHeight post-content ">
                        <a href="${val.link}" target="_blank" class="post-title mb-2 "><h5 class ="fixH5">${val.title}</h5></a>
                        <!-- Post Meta -->
                        <div class="post-meta ">
                            <a href="javascript:void(0)" onClick="funcDeleteArticleViewed('${val.id}')" class="post-cata cata-sm cata-success">
                            <button class="buttonShowDel">XÓA</button>
                            </a>
                        </div>
                    </div>
                </div>`  
    });
    elmAreaArticleViewed.after(xhtml);

}

// đổ danh sách footer
showCategoryFooter = () => {
    $.getJSON( API_PREFIX + "categories_news", function( data ) {
        let xhtml = '';
        $.each( data, function( key, val ) {
            xhtml +=  `<li><a href="catagory.html?id=${val.id}">${val.name}</a></li>`

        });
        elmAreaListFooter.html(xhtml)
    });
}
// active menu
function activeMenu2(){
    var current = location.pathname.split('/').pop();
    if(current!= '' || current==undefined){
        $('.navbar-nav li.nav-item a').each(function(){
            var $this = $(this);
            // console.log($this.attr('href'));
            // if the current path is like this link, make it active
            $this.parent().removeClass('active');
            if($this.attr('href').indexOf(current) !== -1){
                $this.parent().addClass('active');
            }
        })
    }
    
}

// // Đổ danh sách bài viết yêu thích
showArticleViewedLove = (dataLove) => {
    
    // Đổ dữ liệu ra category news
    // elmAreaArticleViewed.nextAll('div').remove();
    let xhtml = '';
    $.each( dataLove, function( key, val ) {
        var dateFormat = val.publish_date
        let changedate = moment(dateFormat).format('DD-MM-YYYY');
        xhtml += `  <div class=" single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
                            <!-- Post Thumbnail -->
                            <div class="post-thumbnail">
                                <img src="${val.thumb}" alt="${val.link}">
                            </div>
                            <!-- Post Content -->
                            <div class="post-content">
                                <a href="${val.link}" target="_blank" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" class="post-title mb-2"><h5>${val.title}</h5></a>
                                <p>${val.description}</p>
                                <a class="post-date"><i class="pad fal fa-clock"></i>${changedate}</a>
                                <a href="javascript:void(0)" onClick="funcDeleteArticleViewedLove('${val.id}')"><i class="fixIconHearLove fas fa-heart"></i></a>     
                                </div>                           
                            </div>
                        </div>`
    });
    elmAreaArticleViewedLove.after(xhtml);
}

// Đổ videolist
showVideoList = () => {
    let xhtml = '';
    $.getJSON( API_PREFIX + `playlists/1/videos?offset=0&limit=12&sort_by=id&sort_dir=asc`, function( data ) {
        $.each(data, function (key,val) { 
            let thumb = val.thumbnail;
            let img = JSON.parse(thumb.replace(/[\\]/g, ""));
            let thumbVideo = img.standard.url;
            var dateFormat = val.published_at;
            let changedate = moment(dateFormat).format('DD-MM-YYYY');
            xhtml += ` <div class="col-12 col-md-3 mb">
            <!-- Single Blog Post -->
            <div class="heightVideo single-blog-post wow fadeInUpBig" data-wow-delay="0.2s">
                <!-- Post Thumbnail -->
                <div class="post-thumbnail">
                    <img src="${thumbVideo}" alt="">
                </div>
                <!-- Post Content -->
                <div class="post-content">
                <h5 target="_blank">${val.title}</h5>
                <a><i class="pad fal fa-clock"></i>${changedate}</a>      
                    </div>
                </div>
            </div>
        </div>`      
        });
                
        elmAreaVideoList.html(xhtml);
    })        
}

// Tìm kiếm
showArticleSearch = () => {
    let keyWord = 'hai'
    let xhtml = '';
        $.getJSON(API_PREFIX + `articles/search?q=${keyWord}&offset=0&limit=15&sort_by=id&sort_dir=desc`, function(data) {
            $.each( data, function( key, val ) {  
                var dateFormat = val.publish_date
                let changedate = moment(dateFormat).format('DD-MM-YYYY');
                    xhtml += `         <div class="col-12 col-md-6 ">
                                            <!-- Single Blog Post -->
                                            <div class="single-blog-post wow fadeInUpBig fixContentHeight" data-wow-delay="0.2s">
                                                <!-- Post Thumbnail -->
                                                <div class="post-thumbnail">
                                                    <img class="fixImgHeight" src="${val.thumb}" alt="${val.link}">
                                                </div>
                                                <!-- Post Content -->
                                                <div class="post-content">
                                                <a href="${val.link}" target="_blank" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" class="post-title mb-2"><h5>${val.title}</h5></a>
                                                    <p>${val.description}</p>
                                                    <p class="post-date">
                                                    <a><i class="pad fal fa-clock"></i></a>
                                                    ${changedate}</a>
                                                    <a onClick="funcViewArticleLove('${val.id}', '${val.title}', '${val.thumb}', '${val.link}', '${val.description}','${val.publish_date}')"><i class=" far fa-heart"></i></a></p>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`                             
            });
            elmAreaListSearch.html(xhtml);
        });

}

// footer
showFooter = () => {
        
}