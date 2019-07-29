(function ($) {
    //  右侧微信的显示隐藏和移动速度

    var sideMove = function () {
        var timer = null;
        var scrollsidebar = document.getElementsByClassName("side_imgs")[0];
        
        //悬浮QQ匀速移动
        var startMove = function (argument) {
            clearInterval(timer);
            timer = setInterval(function () {
                var speed = (argument - scrollsidebar.offsetTop) / 4;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (argument == scrollsidebar.offsetTop) {
                    clearInterval(timer);
                } else {
                    scrollsidebar.style.top = scrollsidebar.offsetTop + speed + "px";
                }
            }, 20);
        };

        //鼠标移动
        var scrollMove = function () {
            var backToTop = document.getElementById('back-to-top');
            window.onscroll = window.onload = function () {
                var scrolltop =
                    document.body.scrollTop || document.documentElement.scrollTop;
                startMove(
                    parseInt(
                        (document.documentElement.clientHeight -
                            scrollsidebar.offsetHeight - backToTop.offsetHeight - 50) + scrolltop
                    )
                );
            };
        };
        $('.telephohe_chat').mouseover(function () {
            $('.telTip').show(200);
        });
        $('.telephohe_chat').mouseout(function () {
            $('.telTip').hide(200);
        });
        $('.weixin_chat').mouseover(function () {
            $('.chatTip').show(200);
        });
        $('.weixin_chat').mouseout(function () {
            $('.chatTip').hide(200);
        });
        return {
            init: function () {
                scrollMove();
            }
        }
    }
    setTimeout(() => {
        sideMove().init();
    }, 1000);



    // 控制AI威胁免疫体系背景图高度为宽度的 660/1140
    var set_ai_height = function () {
        var aiHeight = $(".ai_pic_bg").width() / 19 * 11;
        $(".ai_pic_bg").height(aiHeight)
    }

    set_ai_height()//初始化AI威胁免疫体系背景图高度
    //begin add by zhangyuqing 用于导航下拉框宽度及位置的设置
    $(window).resize(function () {
        //窗口缩放时导航2级菜单动态位置
        // fullDropList();
        //窗口缩放时
        set_ai_height()// 背景图动态高度

    });

    //所有轮播图采用swiper3版本
    //  首页banner轮播图
    var swiperBanner = new Swiper('#banner', {

        onInit: function (swiper) {
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画

        },

        onSlideChangeEnd: function (swiper) {

            swiperAnimate(swiper)//运行当前页动画
        },

        // loop: true,
        // autoplay: 3000,
        pagination: '.swiper-pagination',

        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
    });

    //最新播报轮播
    var swiperHorn = new Swiper('#hornContent', {
        direction: 'vertical',
        loop: true,
        autoplay: 2000

    });

    //典型应用轮播图
    var mySwiperApply = new Swiper(' #apply', {
        loop: true,
        autoplay: 2000,
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween: 27,
        width: 1170,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                width: 375,
                spaceBetween: 10,
            },

        },
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'

    })

    //合作伙伴轮播图
    var mySwiperPartnerList = new Swiper("#partnerList", {

        autoplay: 3000,
        loop: true,
        spaceBetween: 15,
        slidesPerView: 5,
        width: 1070,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 15,
                width: 400
            },
            768: {
                width: 375,
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                width: 275

            }
        },
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'

    })
   console.log(2222)
})(jQuery)