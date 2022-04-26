$(function (){
    $('.trigger').click(function(){
        console.log('햄버거버튼 클릭!')
        $('#sitemapWrap').addClass('active');
    });
    
    $('.sitemap_btn').click(function (){
        $('#sitemapWrap').removeClass('active');
    });


    
    $(window).scroll(function () {
        $("header").addClass('scroll');

        if($(window).scrollTop()==0){
            $("header").removeClass('scroll');
        } 
    });




// 메인메뉴 hover시, 서브메뉴 드롭다운으로 보여짐
    $("nav > ul > li").mouseenter(function(){
        $(this).children(".sub-menu").stop().slideDown(400);
    });
    
    // 메인메뉴에서 마우스 커서가 떠나면, 서브메뉴 드롭업으로 사라짐
    $("nav > ul > li").mouseleave(function(){
        $(this).children(".sub-menu").stop().slideUp(200);
    });


// bar_notice 상하 슬라이더 
    
    var SliderVer = function(selector,obj){
        var $slider = selector || $('.slider'); // 이동할 객체를 변수에 담는다.
        var obj = obj || {};
        var $link = obj.lnk || $('a',$slider);
      
        // 클릭 했을때 객체이동
        $('.bar_next').on('click',function(){
          if(!$slider.is(':animated')){
            // 객체 이동(왼쪽) 
            var $first = $slider.find('li:first'); // 이동후에 ul의 마지막 부분에 삽입할 객체(li)를 변수에 담는다. = null;	
            $slider.stop().animate({'margin-top':-25},function(){
              $slider.css('margin-top',0); // 밀리는 현상를 방지하기 위해서 이동값을 처음 시작점으로 되돌린다.
              $slider.append($first); // 첫번째 자식을 마지막자식으로 이동시킨다.
            });
          }
        });
      
        $('.bar_prev').on('click',function(){
          if(!$slider.is(':animated')){
            var $last = $slider.find('li:last');
            $slider.css('margin-top',-25).prepend($last).stop().animate({'margin-top':0});
          }
        });
      
      };

// tab_content tab

$(".tab_article:gt(0)").hide();

$(".tab_bar div").click(function(){
    var aa = $(this).index();              
    console.log(aa+"번째 div를 클릭했습니다");

    $(".tab_bar div").removeClass("line");
    $(this).addClass("line");

    $(".tab_article").hide();
    $(".tab_article").eq(aa).show();

    $('.tab_article').slick('setPosition');
    // slick tap과 silder를 같이 사용할때 셋 포지션을 적용시킨다.

});

// tab_article slide
    $('.tab_article').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:2
    });

// .main_banner .rolling slide
    $('.rolling').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow:6
    });



// sitemapWrap
    var $mainBtn = $('#sitemapWrap');  //메인 메뉴

$mainBtn.click(function(){ 
   
    if( !$(this).parents('div').is('.active') ) {  //li에 active 클라스가 없을때(닫혀있는상태)
        $('#sitemapWrap').removeClass('active'); 
        $(this).parents('div').addClass('active');  

    } 
    else {     //li에 active 클라스가 있을때(열려있는상태)  
        $('#sitemapWrap').removeClass('active');
    }       
    
});




// header hover시 컬러 변경 이벤트 변환시 마다 체크(addEventLisner)
   var aa = document.querySelector("header");
    
   // 마우스오버
    aa.addEventListener('mouseover', function (){
   aa.setAttribute('class', 'hover');
});

   //마우스아웃
    aa.addEventListener('mouseout',function (){
   aa.removeAttribute('class');
});





});

