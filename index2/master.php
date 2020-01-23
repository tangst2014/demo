<?php
header("Content-Type: application/json;charset=utf-8");
//header('Content-type:text/html;charset=utf-8');


getTableData();2

function getTableData(){

    //与MySQL数据库建立连接
    $link=mysqli_connect('localhost','root','');
    //连接错误时的提示

    if(mysqli_connect_error()){

	    exit(mysqli_connect_error());
    }
    //设置默认字符编码
    mysqli_set_charset($link, 'utf8');
    //选择特定的数据库
    mysqli_select_db($link,'asset');

    $query='select * from bokong';


    $result=mysqli_query($link, $query);
    //以索引数组的方式获取一条记录的数据

    $data=mysqli_fetch_all($result);
    $list = json_encode(array('list'=>$data));
    echo $list;



    //释放与一个结果集相关的内存
    mysqli_free_result($result);
    //关闭与mysql服务器的连接
    mysqli_close($link);
    }
?>
