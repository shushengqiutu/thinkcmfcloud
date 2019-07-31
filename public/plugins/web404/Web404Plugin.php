<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2017 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Yim <yeminch@qq.com>
// +----------------------------------------------------------------------
namespace plugins\error;

use cmf\lib\Plugin;

class Web404Plugin extends Plugin
{

    public $info = [
        'name' => 'Web404Plugin',
        'title' => '404错误页面插件',
        'description' => '自定义的404错误页面',
        'status' => 1,
        'author' => 'MTJO',
        'version' => '1.0.1',
        'demo_url' => 'http://mtjo.net'

    ];

    public $hasAdmin = 0; //插件是否有后台管理界面

    // 插件安装
    public function install()
    {
        return true; //安装成功返回true，失败false
    }

    // 插件卸载
    public function uninstall()
    {
        return true; //卸载成功返回true，失败false
    }

    public function appBegin()
    {

        $config = $this->getConfig();

        //file_exists() 函数检查文件或目录是否存在
        if ($config['custom'] && file_exists(WEB_ROOT . $config['custom'])) {
            $tmpErrPath = WEB_ROOT . $config['custom'];
        } else {
            //主题文件目录 $this->getThemeRoot() "WWW\thinkcmf\public/plugins/error/view//404.html"
            $tmpErrPath = $this->getThemeRoot() . "/404.html";
        }

        if ($config['autoindex']) {
            $autondex = file_get_contents($this->getThemeRoot() . "/autoindex.html");
            $error404 = file_get_contents($tmpErrPath);
            $errPath = BASE_LOG_DIR . "404.html";
            file_put_contents($errPath, $error404);
            //参数1 原文件 参数2 要写入的文件 FILE_APPEND 将写入至文件末尾
            file_put_contents($errPath, $autondex, FILE_APPEND);
            config('exception_tmpl', $errPath);
        } else {
            config('exception_tmpl', $tmpErrPath);
        }
    }
}
