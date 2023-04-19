$(document).ready(function(){
  $('.nav-text').click(function(){
    let item = $(this).attr('data-text');
    
    $('.contain-item').removeClass('is-active');

    $('#contain-'+item).addClass('is-active');

    
  })  
})

// 開啟關閉導覽
$(document).ready(function(){
    $('.nav-arr').click(function(){
        let status = $(this).attr('data-status')

        if(status == "0"){
            $('.nav-contains').animate({width:'200px'},300);
            $('.nav-wrap').animate({width:'245px'},300);
            let arr = $(this).find('label.arr-text');
            arr.removeClass('close');
            arr.addClass('open');
            $(this).attr('data-status','1');
        }else{
            $('.nav-contains').animate({width:'0px'},300);
            $('.nav-wrap').animate({width:'20px'},300);
            let arr = $(this).find('label.arr-text');
            arr.removeClass('open');
            arr.addClass('close');
            $(this).attr('data-status','0');
        }

    })
})
