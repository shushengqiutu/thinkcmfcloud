(function ($) {

    var swiperBanner = new Swiper('#bigBanner', {

        onInit: function (swiper) {

            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画

        },

        onSlideChangeEnd: function (swiper) {

            swiperAnimate(swiper)//运行当前页动画
        }

        // loop: true,
        // autoplay: 3000,

    });

    var workEvent = function () {
        var delayTime = 500;
        $.tempObj = {};
        $.tempObj.changeWorksImg = function () {
            if ($('#industrialTip').is(':hidden')) {
                /*$('.industrial').find('img').attr('src','../img/work2-1-2.png');*/
                $('.industrial .work-font span').css('color', '#666666');
            } else {
                //$('.industrial').find('img').attr('src','../img/work2-1-1.png');
                $('.industrial .work-font span').css('color', 'red');
            }
            if ($('#networkTip').is(':hidden')) {
                //$('.network').find('img').attr('src','../img/work2-1-2.png');
                $('.network .work-font span').css('color', '#666666');
            } else {
                //$('.network').find('img').attr('src','../img/work2-1-1.png');
                $('.network .work-font span').css('color', 'red');
            }
            if ($('#cloudTip').is(':hidden')) {
                //$('.cloud').find('img').attr('src','../img/work2-1-2.png');
                $('.cloud .work-font span').css('color', '#666666');
            } else {
                //$('.cloud').find('img').attr('src','../img/work2-1-1.png');
                $('.cloud .work-font span').css('color', 'red');
            }
        }



        $('.industrial').off('click');
        $('.network').off('click');
        $('.cloudTip').off('click');

        $('.industrial').click(function () {
            $('#industrialTip').show(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            }, delayTime);
        });
        $('.network').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').show(delayTime);
            $('#cloudTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            }, delayTime);
        });
        $('.cloud').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').show(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            }, delayTime);
        });
    }

    var addHoverForSpan = function () {

        var $firstSpan = $('.industrialControl-lights').find('.work-font:first').find('span');

        var spans = $('.industrialControl-lights').find('.work-font span');

        spans.each(function (index, item) {
            $(item).mouseover(function () {

                if ($firstSpan.hasClass('active')) {
                    $firstSpan.removeClass('active');
                }
            })
        });
    };

   
   // 产品功能hover事件
    var panelHover = function () {
        $('.panel-heading').hover(  
            function () {
                $(this).addClass('collapseActive').parent().siblings()
                    .find('.collapseActive').removeClass('collapseActive');
             
            }
        )

    }


    panelHover()
    // addHoverForSpan();

    // addHoverForFeature();

    workEvent();

})(jQuery);