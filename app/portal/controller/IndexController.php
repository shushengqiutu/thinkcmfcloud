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
    public function index()
    {
         
        //  $pageCid      = $this->request->param('cid', 0, 'intval');
        //  echo $pageId;
       
        // return $this->fetch('/index2');
        return $this->fetch('/index');
    }

    public function aboutUs()
    {  

        $fillName="aboutUs";
        $pagename = $this->request->param('pagename');
        $url=$fillName . "/" . $pagename;
        return $this->fetch($url);
    }
    public function  productIndustrial()
    {  

        $fillName="productIndustrial";
        $pagename = $this->request->param('pagename');
        $url=$fillName . "/" . $pagename;
        return $this->fetch($url);
    }
   
    
}
