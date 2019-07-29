(function ($) {
    var workEvent = function () {
        var delayTime = 500;
        $.tempObj =  {};
        $.tempObj.changeWorksImg= function () {
            if($('#industrialTip').is(':hidden')){
                /*$('.industrial').find('img').attr('src','../img/work2-1-2.png');*/
                $('.industrial .work-font span').css('color', '#666666');
            }else{
                //$('.industrial').find('img').attr('src','../img/work2-1-1.png');
                $('.industrial .work-font span').css('color', 'red');
            }
            if($('#networkTip').is(':hidden')){
                //$('.network').find('img').attr('src','../img/work2-1-2.png');
                $('.network .work-font span').css('color', '#666666');
            }else{
                //$('.network').find('img').attr('src','../img/work2-1-1.png');
                $('.network .work-font span').css('color', 'red');
            }
            if($('#cloudTip').is(':hidden')){
                //$('.cloud').find('img').attr('src','../img/work2-1-2.png');
                $('.cloud .work-font span').css('color', '#666666');
            }else{
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
            },delayTime);
        });
        $('.network').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').show(delayTime);
            $('#cloudTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.cloud').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').show(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
    }

    var addHoverForSpan = function () {

        var $firstSpan = $('.industrialControl-lights').find('.work-font:first').find('span');

        var spans = $('.industrialControl-lights').find('.work-font span');

        spans.each(function (index,item) {
            $(item).mouseover(function () {

                if($firstSpan.hasClass('active')){
                    $firstSpan.removeClass('active');
                }
            })
        });
    };

    var addHoverForFeature = function () {

        var all = $('.panel-heading');

        all.each(function (index,item) {
            //图标的命名方式一定要是IndustrialControl2-1-1.png 这种XX-X-X-1.png
            $(item).mouseover(function () {
                var that = $(item);
                var acivedImg = that.find('img');
                var imagePath = './img/' +acivedImg.attr('data-src');

                $('.panel-heading').each(function (num,tempitem) {
                    var notActive = $(tempitem).find('img').attr('data-src');
                     
                        var tempImagePath = './img/' + notActive.split('-')[0]
                        + '-' +
                        + notActive.split('-')[1] + '-2.png';
                     
                   
                    $(tempitem).removeClass('collapseActive');
                    $(tempitem).find('img').attr('src',tempImagePath);
                })
                that.addClass('collapseActive');
                acivedImg.attr('src',imagePath);
            })
        });
    };


    var addCollapseActive = function () {
        $('.panel-heading').each(function (index,item) {
            $(item).click(function () {
                var that = $(item);
                $('.panel-heading').each(function (num,tempitem) {
                    $(tempitem).removeClass('collapseActive');
                    $(tempitem).find('img').attr('src','./img/networkSecNextWall2-2-2.png')
                })

                $(this).next().on('show.bs.collapse', function () {
                    // 执行一些动作...
                    that.addClass('collapseActive');
                    that.find('img').attr('src','./img/networkSecNextWall2-2-1.png')
                });

                $(this).next().on('hide.bs.collapse', function () {
                    // 执行一些动作...
                    that.removeClass('collapseActive');
                    that.find('img').attr('src','./img/networkSecNextWall2-2-2.png')
                });

            })
            
        })
    }

    addHoverForSpan();

    addHoverForFeature();
    /*addCollapseActive();*/
    workEvent();

})(jQuery);