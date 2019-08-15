(function($){
    var companyMap = function () {
        //创建和初始化地图函数：
       
        function initMap() {
        
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMapOverlay();//向地图添加覆盖物
        }

        function createMap() {
            map = new BMap.Map("map")
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
    companyMap();

})(jQuery)