let link    =   'https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2C2nRRDUGnec0OIUNQHvhCx2hSEsVNZA6xujkvOqIUyHtCjTOgrOLtudY'
let itemPageStart   = 0;
let itemPageEnd     = 3;
let range           = 3;
let phimbo          =[];
let loading         = true;
let i               = 0;

$(document).ready(function () {
    $.get(link,
        function (data) {
            phimbo = data.phim.phimbo;
            console.log(phimbo);
        unShowSkelection()
        setPage();
        $(document).scroll(function () { 
            const{scrollTop , scrollHeight , clientHeight} = document.documentElement
            if(scrollTop + clientHeight > scrollHeight - 5){
                if(loading){
                    showLoading();
                    setPage(itemPageEnd, itemPageEnd + range)
                    window.scrollTo({top: scrollTop + 900})
                }
                
            }
    
        });
        },
        "json"
    );
   
});

const showLoading = () => {
    $('.ball').addClass('show');
    loading = false;
    setTimeout(() => {
        $('.ball').removeClass('show');
       itemPageStart = itemPageEnd;
       itemPageEnd = itemPageEnd + range;
       loading  =true;
    }, 2000);
}

const setPage =(itemPageStart = 0, itemPageEnd = 3) =>{
    for (i = itemPageStart; i<itemPageEnd; i++) {
        showItem(phimbo[i]);
    }
}
const showItem = (phim) => {
    console.log(i);
    let animation = ( i%2== 0) ? 'animate__backInRight': 'animate__backInLeft';
    let xhtml = '';
    xhtml =    `<div class="animate__animated ${animation} card text-center">
    <img src="${phim.imageUrl}" class="card-top-center">
    <div class="card-body">
        <h4 class="card-body-title">${phim.title}</h4>
        <h4 class="card-body-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti reprehenderit dolores consectetur dolor consequuntur ipsam porro soluta delectus eius, quod, laudantium error quibusdam atque corporis incidunt molestias, quisquam dolorem!</h4>
    </div>
</div>`
$('.container').append(xhtml);
}
const unShowSkelection = () => {
    // $('.card1').addClass(animate__backInRight); 
    // $('.card2').addClass(animate__backInLeft);
    // $('.card3').addClass(animate__backInRight);
    setTimeout(() => {
        $('.skeletion').addClass('none');
    }, 300);
}