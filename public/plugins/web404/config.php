<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: yangweijie <yangweijiester@gmail.com> <code-tech.diandian.com>
// +----------------------------------------------------------------------

return array(
    'autoindex' => array(
        'title' => '自动返回首页:',
        'type' => 'radio',
        'options' => array(
            '1' => '开启',
            '0' => '关闭',
        ),
        'value' => '1',
    ),

    'custom' => array(
        'title' => '自定义404:',
        'type' => 'text',
        'value' => '',
        'tip' => '相对入口文件所在的目录' //表单的帮助提示
    )
);
