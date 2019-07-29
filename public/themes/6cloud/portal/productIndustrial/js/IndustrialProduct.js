

define(['swiper_animate', 'swiper'], function (swiper_animate, Swiper) {
  
   
       
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
 

    var product = function () {
        // var banner = function () {
        //      debugger
        //     new Swiper('#banner', {

        //         onInit: function (swiper) {
        //             swiperAnimateCache(swiper); //隐藏动画元素 
        //             swiperAnimate(swiper); //初始化完成开始动画

        //         },

        //         onSlideChangeEnd: function (swiper) {

        //             swiperAnimate(swiper)//运行当前页动画
        //         }
              
        //     });
        // }
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

        var addHoverForFeature = function () {

            var all = $('.panel-heading');

            all.each(function (index, item) {
                //图标的命名方式一定要是IndustrialControl2-1-1.png 这种XX-X-X-1.png
                $(item).mouseover(function () {
                    var that = $(item);
                    var acivedImg = that.find('img');
                    var imagePath = './img/' + acivedImg.attr('data-src');

                    $('.panel-heading').each(function (num, tempitem) {
                        var notActive = $(tempitem).find('img').attr('data-src');

                        var tempImagePath = './img/' + notActive.split('-')[0]
                            + '-' +
                            + notActive.split('-')[1] + '-2.png';


                        $(tempitem).removeClass('collapseActive');
                        $(tempitem).find('img').attr('src', tempImagePath);
                    })
                    that.addClass('collapseActive');
                    acivedImg.attr('src', imagePath);
                })
            });
        };
        
        addHoverForSpan();

        addHoverForFeature();

        workEvent();
    }
    return { product }
});