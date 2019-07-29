(function ($) {
    function checkEmail(str) {
        var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    function checkCellMobile(str) {
        var re = /^1\d{10}$/
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    function getPar(par) {
        //获取当前URL
        var local_url = document.location.href;
        //获取要取得的get参数位置
        var get = local_url.indexOf(par + "=");
        if (get == -1) {
            return false;
        }
        //截取字符串
        var get_par = local_url.slice(par.length + get + 1);
        //判断截取后的字符串是否还有其他get参数
        var nextPar = get_par.indexOf("&");
        if (nextPar != -1) {
            get_par = get_par.slice(0, nextPar);
        }
        return get_par;
    }

    var delay = 300;

    // 新闻与活动容器
    var $news_content = $('.newsAndActivity-container');

    var addTopClickEvent = function () {

        $(".footer-wrapper a[href^='#']").off('click');

        var $wrapper_nav = $('.footer-wrapper a');

        $wrapper_nav.each(function (index, item) {

            $(item).click(function (event) {

                $wrapper_nav.removeClass('active');

                $(this).addClass('active');

                if (event.target.id == 'companyProfile') {
                    $('.company').show(delay);
                    $('.recruitment').hide(delay);
                    $('.contactUs').hide(delay);
                    $('.schoolfind').hide(delay);
                    $('.cv').hide(delay);

                    /*$(this).addClass('active');*/

                } else if (event.target.id == 'recruitment') {
                    $('.company').hide(delay);
                    $('.recruitment').show(delay);
                    $('.contactUs').hide(delay);
                    $('.schoolfind').hide(delay);
                    $('.cv').hide(delay);

                } else if (event.target.id == 'schoolfind') {
                    $('.company').hide(delay);
                    $('.schoolfind').show(delay);
                    $('.contactUs').hide(delay);
                    $('.recruitment').hide(delay);
                    $('.cv').hide(delay);

                } else if ($(this).prop('id') == 'newsAndActivity') {
                    var href = "/portal/list/news.html";
                    if($(this).prop('type') == 'lib'){
                        href = "/portal/list/weekly.html";
                    }else if($(this).prop('type') == 'down'){
                        href = "/portal/list/down.html";
                    }else if($(this).prop('type') == 'up'){
                        href = "/portal/list/up.html";
                    }
                    window.location.href = href;
                    return false;
                    $news_content.show(delay);

                    $('.company').hide(delay);
                    $('.recruitment').hide(delay);
                    $('.contactUs').hide(delay);
                    $('.schoolfind').hide(delay);
                    $('.cv').hide(delay);

                } else if (event.target.id == 'cv') {
                    $('.company').hide(delay);
                    $('.schoolfind').hide(delay);
                    $('.contactUs').hide(delay);
                    $('.recruitment').hide(delay);
                    $('.cv').show(delay);

                } else {
                    $('.company').hide(delay);
                    $('.recruitment').hide(delay);
                    $('.contactUs').show(delay);
                    $('.schoolfind').hide(delay);
                     $('.cv').hide(delay);
                    companyMap();
                }

                // addClassOfA();

            })

        });

        var addClassOfA = function () {
            var time = null
            clearTimeout(time);
            time = setTimeout(function () {
                if ($('.company').is(':hidden')) {
                    $('#companyProfile').removeClass('active');
                } else {
                    $('#companyProfile').addClass('active');
                }

                if ($('.recruitment').is(':hidden')) {
                    $('#recruitment').removeClass('active');
                } else {
                    $('#recruitment').addClass('active');
                }

                if ($('.schoolfind').is(':hidden')) {
                    $('#schoolfind').removeClass('active');
                } else {
                    $('#schoolfind').addClass('active');
                }

                if ($('.contactUs').is(':hidden')) {
                    $('#contactUs').removeClass('active');
                } else {
                    $('#contactUs').addClass('active');
                }

                if ($('.cv').is(':hidden')) {
                    $('#cv').removeClass('active');
                } else {
                    $('#cv').addClass('active');
                }
            }, 400)
        }

    };

    var addClickCareerNav = function () {
        $('.careerNav').on('click', function (event) {

            if ($(event.target).hasClass('career1')) {

                $('#career1').show(delay);
                $('#career2').hide(delay);
                $('#career3').hide(delay);
                $('#career4').hide(delay);
                $('#career5').hide(delay);
                $('#career6').hide(delay);

            } else if ($(event.target).hasClass('career2')) {

                $('#career1').hide(delay);
                $('#career2').show(delay);
                $('#career3').hide(delay);
                $('#career4').hide(delay);
                $('#career5').hide(delay);
                $('#career6').hide(delay);

            } else if ($(event.target).hasClass('career3')) {

                $('#career1').hide(delay);
                $('#career2').hide(delay);
                $('#career3').show(delay);
                $('#career4').hide(delay);
                $('#career5').hide(delay);
                $('#career6').hide(delay);

            } else if ($(event.target).hasClass('career4')) {

                $('#career1').hide(delay);
                $('#career2').hide(delay);
                $('#career3').hide(delay);
                $('#career4').show(delay);
                $('#career5').hide(delay);
                $('#career6').hide(delay);

            } else if ($(event.target).hasClass('career5')) {

                $('#career1').hide(delay);
                $('#career2').hide(delay);
                $('#career3').hide(delay);
                $('#career4').hide(delay);
                $('#career5').show(delay);
                $('#career6').hide(delay);

            } else if ($(event.target).hasClass('career6')) {
                $('#career1').hide(delay);
                $('#career2').hide(delay);
                $('#career3').hide(delay);
                $('#career4').hide(delay);
                $('#career5').hide(delay);
                $('#career6').show(delay);
            }

            addActiveTitleClass();
        });

        var addActiveTitleClass = function () {
            var timer = null;
            clearTimeout(timer);
            timer = setTimeout(function () {

                if ($('#career1').is(':hidden')) {
                    $('.career1').removeClass('activeTitle');
                } else {
                    $('.career1').addClass('activeTitle');
                }

                if ($('#career2').is(':hidden')) {
                    $('.career2').removeClass('activeTitle');
                } else {
                    $('.career2').addClass('activeTitle');
                }

                if ($('#career3').is(':hidden')) {
                    $('.career3').removeClass('activeTitle');
                } else {
                    $('.career3').addClass('activeTitle');
                }

                if ($('#career4').is(':hidden')) {
                    $('.career4').removeClass('activeTitle');
                } else {
                    $('.career4').addClass('activeTitle');
                }

                if ($('#career5').is(':hidden')) {
                    $('.career5').removeClass('activeTitle');
                } else {
                    $('.career5').addClass('activeTitle');
                }

                if ($('#career6').is(':hidden')) {
                    $('.career6').removeClass('activeTitle');
                } else {
                    $('.career6').addClass('activeTitle');
                }

            }, 400);
        }
    }

    var addClickSchoolNav = function () {
        $('.schoolNav').on('click', function (event) {

            if ($(event.target).hasClass('school1')) {

                $('#school1').show(delay);
                $('#school2').hide(delay);
                $('#school3').hide(delay);
                $('#school4').hide(delay);
                $('#school5').hide(delay);
                $('#school6').hide(delay);
                $('#school7').hide(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school2')) {

                $('#school1').hide(delay);
                $('#school2').show(delay);
                $('#school3').hide(delay);
                $('#school4').hide(delay);
                $('#school5').hide(delay);
                $('#school6').hide(delay);
                $('#school7').hide(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school3')) {

                $('#school1').hide(delay);
                $('#school2').hide(delay);
                $('#school3').show(delay);
                $('#school4').hide(delay);
                $('#school5').hide(delay);
                $('#school6').hide(delay);
                $('#school7').hide(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school4')) {

                $('#school1').hide(delay);
                $('#school2').hide(delay);
                $('#school3').hide(delay);
                $('#school4').show(delay);
                $('#school5').hide(delay);
                $('#school6').hide(delay);
                $('#school7').hide(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school5')) {

                $('#school1').hide(delay);
                $('#school2').hide(delay);
                $('#school3').hide(delay);
                $('#school4').hide(delay);
                $('#school5').show(delay);
                $('#school6').hide(delay);
                $('#school7').hide(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school6')) {

                $('#school1').hide(delay);
                $('#school2').hide(delay);
                $('#school3').hide(delay);
                $('#school4').hide(delay);
                $('#school5').hide(delay);
                $('#school6').show(delay);
                $('#school7').hide(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school7')) {

                $('#school1').hide(delay);
                $('#school2').hide(delay);
                $('#school3').hide(delay);
                $('#school4').hide(delay);
                $('#school5').hide(delay);
                $('#school6').hide(delay);
                $('#school7').show(delay);
                $('#school8').hide(delay);

            } else if ($(event.target).hasClass('school8')) {
                $('#school1').hide(delay);
                $('#school2').hide(delay);
                $('#school3').hide(delay);
                $('#school4').hide(delay);
                $('#school5').hide(delay);
                $('#school6').hide(delay);
                $('#school7').hide(delay);
                $('#school8').show(delay);
            }

            addActiveTitleClassSchool();
        });

        var addActiveTitleClassSchool = function () {
            var timer = null;
            clearTimeout(timer);
            timer = setTimeout(function () {

                if ($('#school1').is(':hidden')) {
                    $('.school1').removeClass('activeTitle');
                } else {
                    $('.school1').addClass('activeTitle');
                }

                if ($('#school2').is(':hidden')) {
                    $('.school2').removeClass('activeTitle');
                } else {
                    $('.school2').addClass('activeTitle');
                }

                if ($('#school3').is(':hidden')) {
                    $('.school3').removeClass('activeTitle');
                } else {
                    $('.school3').addClass('activeTitle');
                }

                if ($('#school4').is(':hidden')) {
                    $('.school4').removeClass('activeTitle');
                } else {
                    $('.school4').addClass('activeTitle');
                }

                if ($('#school5').is(':hidden')) {
                    $('.school5').removeClass('activeTitle');
                } else {
                    $('.school5').addClass('activeTitle');
                }

                if ($('#school6').is(':hidden')) {
                    $('.school6').removeClass('activeTitle');
                } else {
                    $('.school6').addClass('activeTitle');
                }

                if ($('#school7').is(':hidden')) {
                    $('.school7').removeClass('activeTitle');
                } else {
                    $('.school7').addClass('activeTitle');
                }

                if ($('#school8').is(':hidden')) {
                    $('.school8').removeClass('activeTitle');
                } else {
                    $('.school8').addClass('activeTitle');
                }

            }, 400);
        }
    }

    var companyMap = function () {
        //创建和初始化地图函数：
        function initMap() {
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMapOverlay();//向地图添加覆盖物
        }

        function createMap() {
            map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(116.314403, 40.049811), 16);
        }

        function setMapEvent() {
            map.enableScrollWheelZoom();
            map.enableKeyboard();
            map.enableDragging();
            map.enableDoubleClickZoom()
        }

        function addClickHandler(target, window) {
            target.addEventListener("click", function () {
                target.openInfoWindow(window);
            });
        }

        function addMapOverlay() {
            var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '地址：北京海淀区信息路12号中关村发展大厦C座2层<br/>电话：(010)86469302' +
                '</div>';
            var title = '<span style="color: orangered;font-size: 14px;font-weight: bold">北京六方云科技有限公司</span>';
            var markers = [
                {
                    content: content,
                    title: title,
                    imageOffset: {width: -46, height: -21, display: "block"},
                    position: {lat: 40.04663, lng: 116.315782}
                }
            ];
            for (var index = 0; index < markers.length; index++) {
                var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
                var marker = new BMap.Marker(point);
                var opts = {
                    width: 200,
                    title: markers[index].title,
                    enableMessage: false
                };

                var infoWindow = new BMap.InfoWindow(markers[index].content, opts);

                map.openInfoWindow(infoWindow, point); //开启信息窗口
                addClickHandler(marker, infoWindow);
                map.addOverlay(marker);
            }
            ;
        }

        //向地图添加控件
        function addMapControl() {
            var scaleControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            map.addControl(scaleControl);
            var navControl = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: 3});
            map.addControl(navControl);
            var overviewControl = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: false});
            map.addControl(overviewControl);
        }

        var map;
        initMap();
    }
    addTopClickEvent();
    addClickCareerNav();
    addClickSchoolNav();


    // 新闻与活动按钮
    var $news_btn = $('#newsAndActivity');
    
    var uploadButton = $('<a/>')
        .addClass('btn btn-danger')
        .prop('disabled', true)
        .text('Processing...')
        .on('click', function () {
            var $this = $(this),
                data = $this.data();
            $this
                .off('click')
                .text('Abort')
                .on('click', function () {
                    $this.remove();
                    data.abort();
                });
            data.submit().always(function () {
                $this.remove();
            });
        });
    //定义上传成功才有的属性
    var flagupload = false;
    var uploadname = "";
    $('#fileupload').fileupload({
        url: 'upload.php',
        dataType: 'json',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(doc|docx|pdf)$/i,
        maxFileSize: 5 * 1024 * 1024,
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        previewMaxWidth: 100,
        previewMaxHeight: 100,
        previewCrop: true
    }).on('fileuploadadd', function (e, data) {
        $("#files").empty();
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
            var node = $('<p/>')
                    .append($('<span/>').text(file.name));
            if (!index) {
                node
                    .append('<br>')
                    .append(uploadButton.clone(true).data(data));
            }
            node.appendTo(data.context);
        });
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node
                .prepend('<br>')
                .prepend(file.preview);
        }
        if (file.error) {
            node
                .append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
        }
        if (index + 1 === data.files.length) {
            data.context.find('a')
                .text('上传')
                .prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css(
            'width',
            progress + '%'
        );
    }).on('fileuploaddone', function (e, data) {
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                var success = $('<span class="text-success"/>').text('文件上传成功，请点击提交完成投递！');
                //可以上传
                flagupload = true;
                uploadname = file.name;
                $(data.context.children()[index])
                    .append('<br>')
                    .append(success);
            } else if (file.error) {
                //不可以上传
                flagupload = false;
                var error = $('<span class="text-danger"/>').text(file.error);
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            }
        });
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index) {
            //不可以上传
            flagupload = false;
            var error = $('<span class="text-danger"/>').text('File upload failed.');
            $(data.context.children()[index])
                .append('<br>')
                .append(error);
        });
    }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');


    $("#jobtype").change(function(){
        if($(this).val() == "1"){
            $(".xz").show();
            $(".sz").hide();
            $("#schoolname").attr("required",true);
        }else{
            $(".sz").show();
            $(".xz").hide();
            $("#schoolname").attr("required",false);
        }
    });

    $(".schoolbtn").click(function(){
        $("#jobtype").val("1").change();
        $("#cv").click();
    });

    $(".societybtn").click(function(){
        $("#jobtype").val("2").change();
        $("#cv").click();
    });



    $("#cvForm").submit(function (e) {
        e.preventDefault();
        // console.log(123);
        // return false;
        //招聘类型
        var jobtype = $("#jobtype").val(); // 1：校园招聘 2：社会招聘

        //校招岗位
        // 1：windows开发工程师 2：算法工程师 3：应用开发工程师 4：嵌入C开发工程师 5：嵌入式系统测试工程师 6：终端应用测试工程师 7：大数据安全测试工程师 8：云计算安全测试工程师
        // var xzjob = $("#xzjob").val();
        var xzjob = $("#xzjob").find("option:selected").text();
        //社招岗位
        var szjob = $("#szjob").find("option:selected").text();
        //性别
        var sex = $("#sex").find("option:selected").text();
        //姓名
        var name = $("#jobname").val();
        //学校
        var school = $("#schoolname").val();
        //电话
        var phone = $("#jobphone").val();
        //邮箱
        var email = $("#jobemail").val();

        //检查合法性
        if (email != "") {
            if (!checkEmail(email)) {
                alert("请输入正确的邮箱。");
                return false;
            }
        }
        //检查合法性
        if (phone != "") {
            if (!checkCellMobile(phone)) {
                alert("请输入正确的手机号码。");
                return false;
            }
        }
        if (email == "") {
            email = "暂无"
        }

        if(!flagupload){
            alert("请上传简历附件。");
                return false;
        }
        $.ajax({
            type: "POST",
            url: "send.php",
            data: {
                "jobtype":jobtype,
                "xzjob": xzjob,
                "szjob": szjob,
                "name": name,
                "sex": sex,
                "phone": phone,
                "school": school,
                "email": email,
                "uploadname":uploadname
            },
            success: function (result) {
                alert(result);
            }, error: function (jqXHR, textStatus, errorThrown) {
                /*错误信息处理*/
                console.log(jqXHR.responseText);
            }
        });
        return false;
    }); 

    $("#companyProfileForm").submit(function (e) {
        e.preventDefault();
        console.log(123);
        //公司名称
        var companyName = $("#companyName").val();
        //产品意向
        var intention = $("#intention").val();
        //联系人
        var name = $("#name").val();
        //职务
        var career = $("#career").val();
        //手机号码
        var phone = $("#phone").val();
        //联系电话
        var telPhone = $("#telPhone").val();
        //邮箱地址
        var email = $("#email").val();
        //抄送邮箱地址
        var cc = $("#ccemail").val();
        //检查合法性
        if (email != "") {
            if (!checkEmail(email)) {
                alert("请输入正确的邮箱。");
                return false;
            }
        }
        //检查合法性
        if (cc != "") {
            if (!checkEmail(cc)) {
                alert("请输入正确的抄送邮箱。");
                return false;
            }
        }
        if (phone != "") {
            if (!checkCellMobile(phone)) {
                alert("请输入正确的手机号码。");
                return false;
            }
        }
        if (email == "") {
            email = "暂无"
        }
        if (career == "") {
            career = "暂无"
        }
        if (telPhone == "") {
            telPhone = "暂无"
        }
        $.ajax({
            type: "POST",
            url: "cooperation.php",
            data: {
                "companyName": companyName,
                "intention": intention,
                "name": name,
                "career": career,
                "phone": phone,
                "telPhone": telPhone,
                "email": email,
                "cc": cc
            },
            success: function (result) {
                alert(result);
            }, error: function (jqXHR, textStatus, errorThrown) {
                /*错误信息处理*/
                console.log(jqXHR.responseText);
            }
        });
        return false;
    });


    // 新闻与活动 相关

    // 默认注册
    $news_btn.click(function () {

        return false;

        $new_nav_tabs.eq(0).click();
    });

    // 左侧导航
    var $new_nav_tabs = $('.newsAndActivity-tab .NAA-nav-item');

    // 左侧导航对应视图
    var $new_views = $('.newsAndActivity-view .NNA-views-item');

    // change view
    $new_nav_tabs.click(function () {


        $new_nav_tabs.removeClass('active');

        $new_views.removeClass('active');

        $(this).addClass('active');

        // console.log($(this).index());

        // 切换状态
       // $new_views.eq($(this).index()).addClass('active');

        // 加载内容至dom
        //handleLoadNewsToDom();

    });

    //通过type点击不同的tab
    /**
     * 索引：
     *
     * 新闻与活动：4
     *
     * */
    setTimeout(function(){
        var type = getPar('type');
        console.log(type);
        switch (type * 1) {

            case 2:
                $('#recruitment').click();
                break;

            case 3:
                $('#contactUs').click();
                break;

            case 4:
                $news_btn.click();
                break;
            case 5:
                $("#schoolfind").click();
                break;
            case 6:
                $("#cv").click();
                break;
        }
    },200);
    

    // 复制 新闻card dom
    function cloneNewsCard() {
        return $(' <div class="NNA-views-card">\n' +
            '                                <div class="NNA-views-card-image">\n' +
            '                                    <img src="" alt="" title="">\n' +
            '                                </div>\n' +
            '                                <div class="NNA-views-card-msg">\n' +
            '                                    <div class="item-msg-title">\n' +
            '                                        <a href="javascript:;"></a>\n' +
            '                                        <span></span>\n' +
            '                                    </div>\n' +
            '                                    <div class="item-msg-content"></div>\n' +
            '                                </div>\n' +
            '                            </div>')
    }

    // 加载新闻数据 渲染至dom中
    function handleLoadNewsToDom() {

        if (!$news_content.is(':hidden')) {

            // 当前 tab 索引
            var activeIndex = $('.newsAndActivity-tab .active').index();

            // 储存 footer dom
            var curActiveFooter;

            console.warn('============ 当前索引 ============');
            console.log(activeIndex);

            // debugger;

            switch (activeIndex) {

                case 0:
                    // 产品周刊
                    curActiveFooter = $('#productMagazine_pagination');
                    break;

                case 1:
                    // 新闻动态
                    curActiveFooter = $('#newsAndTrends_pagination');
                    break;
            }

            // 新闻数据
            var testNewsAjaxData = [
                {
                    id: 'xxxx',
                    img: '../../img/xxx.jpg',
                    title: '新闻1新闻1新闻1新闻1新闻1新闻1新闻1',
                    content: '六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方',
                    time: '2018-03-28'
                }
            ];

            // ajax 后的 success data 传入
            // 渲染dom
            //appendDom(testNewsAjaxData, activeIndex);

            /*curActiveFooter.bootstrapPaginator({
                currentPage: 1,
                totalPages: 20,
                numberOfPages: 5,
                bootstrapMajorVersion: 3,
                itemTexts: function (type, page, current) {
                    switch (type) {
                        case 'first':
                            return '首页';
                        case 'prev':
                            return '上一页';
                        case 'next':
                            return '下一页';
                        case 'last':
                            return '末页';
                        case 'page':
                            return page
                    }
                }, onPageClicked: function (event, originalEvent, type, page) {
                    // console.warn('============ 当前点击页数 ============');
                    // console.log(page)
                }
            });*/

        }

        // 追加新闻列表
        function appendDom(data, tabIndex) {

            // 当前需要添加新闻列表的地方
            var $newsContainer = curActiveFooter.parent();

            // 清空历史新闻列表
            $newsContainer.parents('.NNA-views-item').find('.NNA-views-card').remove();

            // ajax 后
            $.each(data, function (i, e) {
                var $card = cloneNewsCard();

                var $tag_a = $card.find('.item-msg-title a');

                $card.find('.NNA-views-card-image img').prop('src', e.img);
                $card.find('.item-msg-content').html(e.content);

                $tag_a.html(e.title).next().html(e.time);

                $tag_a.click(function () {
                    showNewsDetail(e, tabIndex);
                });

                $newsContainer.before($card);

            });

        }

    }

    // 显示新闻详情
    function showNewsDetail(data, tabIndex) {

        // 左侧导航
        var $tabs_c = $('.newsAndActivity-tab');

        // 左侧导航对应视图
        var $views_c = $('.newsAndActivity-view');

        // 新闻详情容器
        var $news_detail_c = $('.news-detail-container');

        $tabs_c.hide();
        $views_c.hide();

        console.warn('============ 当前数据 ============');
        console.log(data);
        console.log(tabIndex);

        // AJAX 数据
        // 新闻详情数据
        var testNewsDetail = {
            title: '新闻 test 1新闻1',
            time: '2018-03-28',
            content: '<div>六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方云简介六方</div>'
        };

        // 更改面包屑
        var $breadcrumb = $news_detail_c.find('.title-breadcrumb');

        var $back = $breadcrumb.find('a').html($('.newsAndActivity-tab .NAA-nav-item').eq(tabIndex).html());

        $back.unbind();

        $back.click(function () {
            $tabs_c.show();
            $views_c.show();
            $news_detail_c.hide();
        });

        $breadcrumb.find('i').html(testNewsDetail.title);

        // 更改大标题
        $news_detail_c.find('h1').html(testNewsDetail.title);

        // 更改时间
        $news_detail_c.find('.title-time span').html(testNewsDetail.time);

        // 更改内容
        $news_detail_c.find('.news-detail-content').html(testNewsDetail.content);

        // 显示
        $news_detail_c.show();

    }

    // showNewsDetail();

})(jQuery);
