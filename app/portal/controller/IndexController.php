<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2019 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;
//  控制器实现页面跳转

class IndexController extends HomeBaseController
{
    //首页跳转控制器
    public function index()
    {
         
        return $this->fetch('/index'); 

    }

   
    //产品子页面跳转控制器
    public function  product()
    {  

        
        

        $fillName="product";
        //获取跳转页面参数
        $pagename = $this->request->param('pagename');
        //拼接跳转地址
        $url=$fillName . "/" . $pagename;
         //跳转地址为空回到首页
        if(empty($pagename )){
         
            return $this->fetch('/index');
        }else{
         
         //跳转页面不为空，跳转对应页面
            return $this->fetch($url);
        }
    }

    public function  aboutUs()
    {  
        
        $fillName="aboutUs";
        //获取跳转页面参数
        $pagename = $this->request->param('pagename');
        //拼接跳转地址
        $url=$fillName . "/" . $pagename;
         //跳转地址为空回到首页
        if(empty($pagename )){
         
            return $this->fetch('/index');
        }else{
         //跳转页面不为空，跳转对应页面
            return $this->fetch($url);
        }
    
    }
   
    
}
