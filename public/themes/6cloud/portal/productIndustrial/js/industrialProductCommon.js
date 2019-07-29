// (function ($) {
//     var workEvent = function () {
//         var delayTime = 500;
//         $.tempObj =  {};
//         $.tempObj.changeWorksImg= function () {
//             if($('#industrialTip').is(':hidden')){
//                 $('.industrial').find('img').attr('src','../img/work2-1-2.png');
//             }else{
//                 $('.industrial').find('img').attr('src','../img/work2-1-1.png');
//             }
//             if($('#networkTip').is(':hidden')){
//                 $('.network').find('img').attr('src','../img/work2-2-2.png');
//             }else{
//                 $('.network').find('img').attr('src','../img/work2-2-1.png');
//             }
//             if($('#cloudTip').is(':hidden')){
//                 $('.cloud').find('img').attr('src','../img/work2-3-2.png');
//             }else{
//                 $('.cloud').find('img').attr('src','../img/work2-3-1.png');
//             }
//             if($('#dynamicTip').is(':hidden')){
//                 $('.dynamic').find('img').attr('src','../img/work2-4-2.png');
//             }else{
//                 $('.dynamic').find('img').attr('src','../img/work2-4-1.png');
//             }
//         }

//         $('.industrial').click(function () {
//             $('#industrialTip').show(delayTime);
//             $('#networkTip').hide(delayTime);
//             $('#cloudTip').hide(delayTime);
//             $('#dynamicTip').hide(delayTime);
//             setTimeout(function () {
//                 $.tempObj.changeWorksImg();
//             },delayTime);
//         });
//         $('.network').click(function () {
//             $('#industrialTip').hide(delayTime);
//             $('#networkTip').show(delayTime);
//             $('#cloudTip').hide(delayTime);
//             $('#dynamicTip').hide(delayTime);
//             setTimeout(function () {
//                 $.tempObj.changeWorksImg();
//             },delayTime);
//         });
//         $('.cloud').click(function () {
//             $('#industrialTip').hide(delayTime);
//             $('#networkTip').hide(delayTime);
//             $('#cloudTip').show(delayTime);
//             $('#dynamicTip').hide(delayTime);
//             setTimeout(function () {
//                 $.tempObj.changeWorksImg();
//             },delayTime);
//         });
//         $('.dynamic').click(function () {
//             $('#industrialTip').hide(delayTime);
//             $('#networkTip').hide(delayTime);
//             $('#cloudTip').hide(delayTime);
//             $('#dynamicTip').show(delayTime)
//             setTimeout(function () {
//                 $.tempObj.changeWorksImg();
//             },delayTime);

//         });
//     }
    
   
//     workEvent();
   

// })(jQuery)

define(function(){
    var workEvent = function () {
        var delayTime = 500;
        $.tempObj =  {};
        $.tempObj.changeWorksImg= function () {
            if($('#industrialTip').is(':hidden')){
                $('.industrial').find('img').attr('src','../img/work2-1-2.png');
            }else{
                $('.industrial').find('img').attr('src','../img/work2-1-1.png');
            }
            if($('#networkTip').is(':hidden')){
                $('.network').find('img').attr('src','../img/work2-2-2.png');
            }else{
                $('.network').find('img').attr('src','../img/work2-2-1.png');
            }
            if($('#cloudTip').is(':hidden')){
                $('.cloud').find('img').attr('src','../img/work2-3-2.png');
            }else{
                $('.cloud').find('img').attr('src','../img/work2-3-1.png');
            }
            if($('#dynamicTip').is(':hidden')){
                $('.dynamic').find('img').attr('src','../img/work2-4-2.png');
            }else{
                $('.dynamic').find('img').attr('src','../img/work2-4-1.png');
            }
        }

        $('.industrial').click(function () {
            $('#industrialTip').show(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').hide(delayTime);
            $('#dynamicTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.network').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').show(delayTime);
            $('#cloudTip').hide(delayTime);
            $('#dynamicTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.cloud').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').show(delayTime);
            $('#dynamicTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.dynamic').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').hide(delayTime);
            $('#dynamicTip').show(delayTime)
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);

        });
    }
    return workEvent;
});