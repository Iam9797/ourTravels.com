// 預設播第一張
let slideIndex = 1 ;

// 上下一張
function plusSlides(n){
    showSlides(slideIndex += n);
}

// 點擊第幾張
function currnetSlides(n){
    showSlides(slideIndex = n);
}

// 選擇顯示的圖片
function showSlides(n){
    let slides =$('.slides-wrap .myslides').length;
    // 如果超過最後一張，跳回第一張
    if( n > slides ) slideIndex = 1; 
    
    // 如果第一張往回，跳至最後一張
    if ( n < 1 ) slideIndex = slides;

    // 把全部照片隱藏
    $('.slides-wrap .myslides').hide();
    
    // 把全部的下方點點移除active
    $('.slides-wrap .dot').removeClass('active')

    // 選中的顯示
    $('.slides-wrap #slide-' + slideIndex ).show();
    $('.slides-wrap #dot-' + slideIndex).addClass('active');
}
// 加入動作
$(document).ready(function(){
    // 預設
    showSlides(slideIndex);

    // 下方點點
    $('.slides-wrap .dot').click(function(){
        let index = $(this).attr('id').replace('dot-','');
        currnetSlides(index);
    })

    // 上一張
    $('.slides-wrap .prev').click(function(){
        plusSlides(-1);
    })

    // 下一張
    $('.slides-wrap .next').click(function(){
        plusSlides(1);
    })

    // 點擊縮圖
    $('.img-item').click(function(){
        let index = $(this).attr('id').replace('img-','')

        showSlides(slideIndex = index);
    })
})