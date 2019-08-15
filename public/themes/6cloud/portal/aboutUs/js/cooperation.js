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


    $("#companyProfileForm").submit(function (e) {
        e.preventDefault();

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
        // //抄送邮箱地址
        // var cc = $("#ccemail").val();
        // 检查合法性

        if (email != "") {

            if (!checkEmail(email)) {
                console.log(123);
                alert("请输入正确的邮箱。");
                console.log(3);
                return false;
            }
        }
        // 检查合法性
        // if(cc != ""){
        //     if(!checkEmail(cc)){
        //         alert("请输入正确的抄送邮箱。");
        //         return false;
        //     }
        // }
       
        if(phone != ""){
            if(!checkCellMobile(phone)){
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

        $('.loading').show();
        $.ajax({
            type: "POST",
            url: "/jianli/send2.php",
            data: {
                "companyName":companyName,
                "intention":intention,
                "name":name,
                "career":career,
                "phone":phone,
                "telPhone":telPhone,
                "email":email,

            },
            success: function(result){
                console.log(result)
                if(result==="投递成功!"){
                    $('.loading').removeClass("active");
                    $('.loading>.loading_text').html("投递成功!")
                }else{
                  $('.loading>.loading_text').html("投递失败").css("color","red")
                }

            },error: function (jqXHR, textStatus, errorThrown) {
                /*错误信息处理*/
                console.log(jqXHR.responseText);
            }
        });
        return false;
    });


  
})(jQuery)