(function ($) {
	"use strict"

	///////////////////////////
	// 延时加载lodding
	$(window).on('load', function () {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy 

	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

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

	///////////////////////////
	// Smooth scroll
	// $("#nav .main-nav a[href^='#']").on('click', function(e) {
	// 	e.preventDefault();
	// 	var hash = this.hash;//获取地址#号后面的的包括#号的字符串


	// 	try{

	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top
	// 		}, 600);
	// 	}catch(e){
	// 		console.error(e.message,"请设置跳转路径");
	// 	}
	// });
	$(".footer-wrapper a[href^='#']").on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;
		if ($(this.hash).offset() != undefined) {
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top
			}, 600);
		}
	});

	$('#back-to-top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function () {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function () {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll 
	$(window).on('scroll', function () {
		var wScroll = $(this).scrollTop();

		// Fixed nav 固定导航
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});


	//手机端和pc端产品下拉列表适配	

	function fullDropList() {
		// 缩放距离
		//产品
		var width = $(window).width() + 'px'; //视口宽度
		var solutionListFullScreenLfet;//产品下拉菜单左侧定位位置
		var dropListTwoLeft;//解决方案下拉菜单左侧定位位置
		if (parseInt(width) > 767) {
			//pc
			var triangleOneleft = ($('.main-nav ').offset().left) + 17 + 'px';//产品小三角偏移位置
			solutionListFullScreenLfet = -($('.main-nav ').offset().left + parseInt(width) / 2) + 'px';//产品下拉列表左偏位置
			dropListTwoLeft = -157 + 'px';
		} else {
			//手机端
			solutionListFullScreenLfet = 0 + "px";
			dropListTwoLeft = 0 + "px";
		}

		// 产品下拉菜单
		$('.solutionListFullScreen').css('width', width);
		$('.triangleOne').css('left', triangleOneleft);
		$('.solutionListFullScreen').css('left', solutionListFullScreenLfet);
		// 解决方案下拉菜单
		$('.dropListTwo').css('left', dropListTwoLeft);
		$('.dropdownList').css('left', dropListTwoLeft);

	};
	fullDropList();
	$(window).resize(function () {
		//窗口缩放时导航2级菜单动态位置
		fullDropList();


	});
})(jQuery);
